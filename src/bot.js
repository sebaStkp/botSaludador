// bot.js
export function saludo(nom, edad, genero) {
    let date = new Date();
    let hora = date.getHours();
    let saludo = "";

    if (hora >= 5 && hora < 12){
        saludo += "Buenos días ";
    }
    if (hora >= 12 && hora < 19){
        saludo += "Buenas tardes ";
    }
    if (hora >= 19 || hora < 5){
        saludo += "Buenas noches ";
    }
    if (edad >= 30){
        if(genero == "Hombre"){
            saludo += "Señor ";
        }
        if(genero == "Mujer"){
            saludo += "Señora ";
        }
    }
    saludo += nom;
    return saludo;
}

export function saludoIngles(nom, edad, genero) {
    let date = new Date();
    let hora = date.getHours();
    let saludo = "";

    if (hora >= 5 && hora < 12){
        saludo += "Good morning ";
    }
    if (hora >= 12 && hora < 19){
        saludo += "Good afternoon ";
    }
    if (hora >= 19 || hora < 5){
        saludo += "Good night ";
    }
    if (edad >= 30){
        if(genero == "Hombre"){
            saludo += "Mr. ";
        }
        if(genero == "Mujer"){
            saludo += "Mrs. ";
        }
    }
    saludo += nom;
    return saludo;
}

