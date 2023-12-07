document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('card-holder');
    const limiteResultados = 21;


fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
        const personagensLimitados = data.slice(0, limiteResultados);
    
        personagensLimitados.forEach(character => {
            exibeDados(character, container);
        });
    })
    .catch(error => console.error('Erro ao buscar dados da API:', error));


function exibeDados(dados, container) {
    let card = document.createElement('div');
    card.className = 'card';

    let imagemSrc;
    if (dados.house === 'Gryffindor') {
        imagemSrc = './imagens/grifinoria.png';
    } else if (dados.house === 'Slytherin') {
        imagemSrc = './imagens/sonserina.png';
    } else if (dados.house === 'Hufflepuff') {
        imagemSrc = './imagens/lufa-lufa.png';
    } else if (dados.house === 'Ravenclaw') {
        imagemSrc = './imagens/corvinal.png';
    } else {
        imagemSrc = './imagens/default.png';
    }

    card.innerHTML = `
        <div class="imagem" id="${dados.name.toLowerCase()}" style="background-image: url(${dados.image});">
            <img class="escudo" src="${imagemSrc}" alt="escudo da casa">
        </div>
        <div class="conteudo">
            <h2>Nome: ${dados.name}</h2>
            <ul>
                <li>Casa: ${dados.house}</li>
                <li>Aniversário: ${dados.dateOfBirth}</li>
                <li>Patronus: ${dados.patronus}</li>
                <li>Ancestrais: ${dados.ancestry}</li>
                <li>Ator: ${dados.actor}</li>
            </ul>
        </div>
    `;

    container.appendChild(card);
}
});