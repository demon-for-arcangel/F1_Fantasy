import { usuario } from "./objetos.js";

function btnRegistrarNav(){
    window.location.href = "../html/registro.html";
}

function btnIniciarSesion(){
    window.location.href = "../html/inicio.html";
}

function validarInicio(){
    const correo = document.querySelector('input[type = "email"]').value;
    const contrasena = document.querySelector('input[type = "password"]').value;

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    var error = document.getElementById("error")

    if (usuarioGuardado){
        Object.assign(usuario, usuarioGuardado);
        btnIniciarSesion();
    }else{
        error.textContent = "Correo electronico o contraseña incorrecta. Vuelva a intentarlo."
    }
    return false;
}

window.validarInicio = validarInicio;

const botonIniciarSesion = document.getElementById('iniciarSesion');
botonIniciarSesion.addEventListener('click', validarInicio);

const botonRegistrarNav = document.getElementById('btnRegistrar');
botonRegistrarNav.addEventListener('click', btnRegistrarNav);