import { usuario } from "./objetos.js";

function btnInicioSesion(){
    window.location.href = "../html/index.html";
}

function btnRegistrar(){
    window.location.href = "../html/registro.html";
}

function btnIniciarSesion(){
    window.location.href = "../html/inicio.html";
}

function validarInicio(){
    const correo = document.querySelector('input[type = "email"]').value;
    const contrasena = document.querySelector('input[type = "password"]').value;

    console.log(usuario);

    const validarUsuario = usuario.correo === correo && usuario.contrasena === contrasena
    var error = document.getElementById("error")

    if (validarUsuario){
        btnIniciarSesion();
    }else{
        error.textContent = "Correo electronico o contraseña incorrecta. Vuelva a intentarlo."
    }
    return false;
}

window.validarInicio = validarInicio;

// Asegúrate de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    const botonIniciarSesion = document.querySelector('input[value="iniciarSesion"]');
    botonIniciarSesion.addEventListener('click', validarInicio);
});