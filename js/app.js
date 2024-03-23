let produto = document.getElementById("produto");
let quantidade = document.getElementById("quantidade");
let listaCarrinho = document.getElementById("lista-produtos");
let valorTotal = document.getElementById("valor-total");
const elementos = document.querySelectorAll(".item");

function adicionar() {
  let novoItem = document.createElement("li");
  novoItem.textContent = `${produto.value} x ${quantidade.value}`;
  listaCarrinho.appendChild(novoItem);
  atualizarTotal();
}

function atualizarTotal() {
  let total = 0;
  
  listaCarrinho.querySelectorAll("li").forEach(item => {
    total += extrairPreco(item.textContent);
  });
  
  valorTotal.textContent = `R$${total.toFixed(2)}`;
}

function extrairPreco(texto) {
  let precoTexto = texto.split("R$").pop().trim();
  return parseFloat(precoTexto);
}

function limpar() {
  listaCarrinho.innerHTML = "";
  valorTotal.textContent = "0";
}
