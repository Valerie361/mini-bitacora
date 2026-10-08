const formulario = document.querySelector("#formulario");
const inputTitulo = document.querySelector("#titulo");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  // SE MUESTRA EL VALOR DEL INPUT EN LA CONSOLA
  //console.log("Entrada guardada:", inputTitulo.value);
  //inputTitulo.value = "";
  const lista = document.querySelector("#lista"); // Busca en la página el elemento con id "lista".
  const contenedor = document.createElement("li"); // Crea un nuevo elemento de lista (<li>).
  contenedor.textContent = inputTitulo.value; // Coloca en el <li> el texto escrito en el campo.
  if (inputTitulo.value.trim() === "") { // Comprueba si el campo está vacío o solo tiene espacios.
    alert("Por favor, ingresa un título válido."); // Muestra un aviso si no hay un título válido.
    return; // Detiene la función para no agregar un elemento vacío.
  }
  lista.appendChild(contenedor); // Agrega el nuevo <li> dentro de la lista de la página.
  inputTitulo.value = ""; // Vacía el campo después de agregar el título.
});
