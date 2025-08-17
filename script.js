function adicionarCarrinho(produto) {
    alert(produto + " foi adicionado ao carrinho!");
}

document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});
