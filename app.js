const formulario = document.querySelector("#formulario");
const inputTitulo = document.querySelector("#titulo");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  console.log("Entrada guardada:", inputTitulo.value);
  inputTitulo.value = "";
});