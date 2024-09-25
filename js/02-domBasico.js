let divMessage = document.getElementById("message");

//divMessage.innerText = "Lucas <b>Honorato</b>";
//divMessage.innerHTML = "Lucas <b>Honorato</b>";

let nomePessoa = "Lucas Honorato";
let urlImgProfile = "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg";

divMessage.innerHTML = `<p>Olá ${nomePessoa}</p>
<img id="img" src="">`;

let img = document.getElementById("img");
img.src = urlImgProfile;