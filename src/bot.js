// bot.js
function saludo(nom) {
    let date = new Date();
    let hora = date.getHours();
    if (hora >= 5 && hora < 12){
        return "Buenos días " + nom;
    }
    if (hora >= 12 && hora < 19){
        return "Buenas tardes " + nom;
    }
    if (hora >= 19 || hora < 5){
        return "Buenas noches " + nom;
    }
    return "prueba";
}

export default saludo;
