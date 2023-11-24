import { usuario } from "./objetos.js";
import '../style/estilo.css';

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
    var error = document.getElementById("error");

    if (!correo || !contrasena){
        error.textContent = "Por favor ingresa tanto el correo electrónico como la contraseña.";
        setTimeout(function(){
            error.textContent = "";
        }, 3500);
    }else{
        if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.contrasena === contrasena) {
            Object.assign(usuario, usuarioGuardado);
            btnIniciarSesion();
        } else {
            error.textContent = "Correo electrónico o contraseña incorrecta. Vuelve a intentarlo.";
            setTimeout(function(){
                error.textContent = "";
            }, 3500);
        }
        return false;
    }
}

window.validarInicio = validarInicio;

const botonIniciarSesion = document.getElementById('iniciarSesion');
botonIniciarSesion.addEventListener('click', validarInicio);

const botonRegistrarNav = document.getElementById('btnRegistrar');
botonRegistrarNav.addEventListener('click', btnRegistrarNav);

// Agrega un event listener para el evento keydown en el campo de correo electrónico
const correoInput = document.querySelector('input[type="email"]');
correoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Mueve el foco al campo de contraseña cuando se presiona "Enter" en el campo de correo electrónico
        document.querySelector('input[type="password"]').focus();
    }
});

// Agrega un event listener para el evento keydown en el campo de contraseña
const contrasenaInput = document.querySelector('input[type="password"]');
contrasenaInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        validarInicio();
    }
});
