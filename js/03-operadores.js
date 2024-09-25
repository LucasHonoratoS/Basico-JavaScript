let divMessage = document.getElementById("message");

let numeroA = 5;
let numeroB = 2;

let soma = numeroA + numeroB;
let subtracao = numeroA - numeroB;
let multiplicacao = numeroA * numeroB;
let divisao = numeroA/numeroB;

// resto da divisao - módulo
let resto = numeroA % numeroB;

let potencia = numeroA ** numeroB;

let num = 6;

num++; // 7
console.log(num); // 7
num--; // 6
console.log(num); // 6

// operador pós fixado

console.log(num++); // 6
console.log(num); // 7

// operador pré fixado

console.log(++num); // 8

// operador de atribuicao
num += 20;
console.log(num);

divMessage.innerHTML = `
<p>Numero A: ${numeroA}</p>
<p>Numero B: ${numeroB}</p>
<p>Soma: ${soma}</p>
<p>Subtracao: ${subtracao}</p>
<p>Multiplicacao: ${multiplicacao}</p>
<p>Divisao: ${divisao}</p>
<p>Resto: ${resto}</p>
<p>potencia: ${potencia}</p>`;
