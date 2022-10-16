var agora = new Date();
var hora = agora.getHours();

var bac = window.document.getElementsByTagName("body")[0];
var pow = window.document.getElementsByTagName("img")[0];
var man = window.document.getElementById("mensagem");

man.innerHTML = `Agora são ${hora} horas`;

if (hora > 6 && hora < 12) {
  bac.style.background = "darkorange";
  pow.src = "Imagens/manha.jpg";
} else if (hora < 18) {
  bac.style.background = "lightblue";
  pow.src = "Imagens/windows.jpg";
} else {
  bac.style.background = "rgb(40,40,40)";
  pow.src = "Imagens/noite.jpg";
}
