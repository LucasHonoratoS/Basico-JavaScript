let divMessage = document.getElementById("message");
let numeroA = 5;
let numeroB = 6;

if (numeroA > numeroB) {
    divMessage.innerHTML = `<p>${numeroA} é maior que ${numeroB}</p>`
} else {
    divMessage.innerHTML = `<p>${numeroA} é menor que ${numeroB}</p>`
}