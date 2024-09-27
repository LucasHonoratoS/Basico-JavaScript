for (let contador = 0; contador <= 10; contador++) {
    console.log(contador);
}

let qtdProduto = +prompt("Digite a atd de produto que deseja exibir");

for (let i = 0; i < qtdProduto; i++) {
    let pProduto = document.createElement("p");
    pProduto.innerHTML = `Produto ${i+1}`;
    document.body.appendChild(pProduto);
}

let array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));