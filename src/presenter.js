import saludo from "./bot";

const nombre = document.querySelector("#nom-txt");
const form = document.querySelector("#usr-data");
const div = document.querySelector("#resp-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nom = nombre.value;

    div.innerHTML = "<p>" + saludo(nom) + "</p>";
});