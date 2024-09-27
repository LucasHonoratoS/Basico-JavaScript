document.getElementById("somar").addEventListener("click", function() {
    let numA = +document.getElementById("primeiro-numero").value;
    let numB = +document.getElementById("segundo-numero").value;

    let soma = numA + numB;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O resultado é: ${soma}`
});

function subtrair() {
    let numA = +document.getElementById("primeiro-numero").value;
    let numB = +document.getElementById("segundo-numero").value;

    let soma = numA - numB;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O resultado é: ${soma}`
}

function divisao() {
    let numA = +document.getElementById("primeiro-numero").value;
    let numB = +document.getElementById("segundo-numero").value;
    let resultado = document.getElementById("resultado");
    
    if (numB == 0) {
        return resultado.innerHTML = `o segundo numero não pode ser 0`
    }
    
    let divisao = numA / numB;
   
    resultado.innerHTML = `O resultado é: ${divisao}`
}

function multiplicacao() {
    let numA = +document.getElementById("primeiro-numero").value;
    let numB = +document.getElementById("segundo-numero").value;

    let multiplicacao = numA * numB;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O resultado é: ${multiplicacao}`
}