const { json } = require("express");

function guardar (){

    const myHeaders =new Headers ();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();
    
    let raw=JSON.stringify({
        "dni":document.getElementById("dni").value,
        "nombre":document.getElementById("nombre").value,
        "dncur":document.getElementById("dncur").value,
        "nombrecurso":document.getElementById("nombrecurso").value,
        "dia":document.getElementById("dia").value,
        "horain":document.getElementById("horain").value,
        "horafin":document.getElementById("horafin").value,
        "estahor":document.getElementById("estahor").value,
        "estamult":document.getElementById("estamult").value
    })
    let requestOptions ={
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    }
    fetch("http://localhost:8888/.netlify/functions/estudiantes", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
    
}