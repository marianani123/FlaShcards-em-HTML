function criCartao(categoria, pergunta, resposta) {
    let conteiner = document.getElementById('conteiner')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

} cartao.inneHTML = `
<dix class=">
<h3>${categoria}</h3>
<div class="cartao_conteudo_pergunta">
<p>${pergunta}</p>

</div>
<div class=cartao_conteudop_resposta">
<p>${resposta}</p>
<div>
</div>

let respostaEstaVisivel=false

function viracartao(){
respostaEsvisivel=!respostaEstaVisivel
cartao.classList.toggle('active',respostaEstaVisivel)
}
cartao.addEventListener('click',viracartao)
conteiner.appenChild(cartao)

}