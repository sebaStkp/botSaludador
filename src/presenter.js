import { saludo, saludoIngles } from "./bot";

const nombre = document.querySelector("#nom-txt");
const form = document.querySelector("#usr-data");
const div = document.querySelector("#resp-div");
const edad = document.querySelector("#edad-txt");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nom = nombre.value;
    const ed = edad.value;
    const genero = document.querySelector("input[name='genero']:checked").value;
    const idioma = document.querySelector("input[name='idioma']:checked").value;
    if(idioma=="Español"){
        div.innerHTML = "<p>" + saludo(nom, ed, genero) + "</p>";
    }
    else{
        div.innerHTML = "<p>" + saludoIngles(nom, ed, genero) + "</p>";
    }
    
    
});