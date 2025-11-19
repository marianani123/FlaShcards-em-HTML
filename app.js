function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');

    // Criar elemento do cartão
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Conteúdo interno do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>

            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>

            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Controle de visibilidade da resposta
    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Evento de clique
    cartao.addEventListener('click', viraCartao);

    // Adicionando ao container
    container.appendChild(cartao);
}
