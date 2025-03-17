//Escribe aquí tu código JavaScript

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("pedido");

    const instrucciones = document.getElementById("instrucciones");

    const contador = document.getElementById("contador");


    form.onsubmit = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    
    if(nombre == "" || direccion.length < 15 ||telefono.length==9 || !email.includes("@")) {
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos");
    } else{
        alert("Listo");
    }
    };

    const calcularTotal = () => {
    let tipoBurger="";
    let cantidadBurger;
    let precioExtra=1;
    let precioTotal;
    let precio = document.getElementById("hamburguesa").value;
    let extras = document.querySelectorAll("extra").length;

    if (tipoBurger == document.getElementById("hamburguesa").value("clasica")){
        precio=5;
    }else if(tipoBurger== document.getElementById("hamburguesa").value("bbq")){
        precio=7;
    }else if(tipoBurger==document.getElementById("hamburguesa").value("especial")){
        precio=8;
    }

    precioTotal= document.querySelectorAll("extra").length + precioExtra;
    cantidadBurger= precioTotal * document.getElementById("hamburguesa").length;

    };
    instrucciones.oninput = () => {
        contador.textContent = instrucciones.value.length/100;
    };
};