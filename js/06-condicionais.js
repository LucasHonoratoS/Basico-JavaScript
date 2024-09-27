let idade = 80;

let spanIdade = document.getElementById("span-idade");
spanIdade.innerHTML = `A idade do usuario é: ${idade}`;

let verificaIdade = document.querySelector("#verifica-idade");

if (idade < 18) {
    verificaIdade.innerHTML = "O usuario é menor de idade";
    verificaIdade.className = "dark";
} else if (idade < 60) {
    verificaIdade.innerHTML = "O usuario é maior de idade e ta bem";
    verificaIdade.className = "light";
} else {
    verificaIdade.innerHTML = "O usuario é maior de idade e idoso";
    verificaIdade.className = "dark";
}

let mes = 7;
let semestre = "";

if (mes <= 6) {
    semestre = "1º Semestre";
} else {
    semestre = "2º Semestre"
}

let semestreTernario = mes <= 6 ? "1º Semestre" : "2º Semestre";
console.log(`Estamos no ${semestre}`);

let usuario = "admin";

switch (usuario) {
    case "admin":
        console.log("é admin");
}