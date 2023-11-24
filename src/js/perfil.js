import '../style/estilo.css';
document.addEventListener('DOMContentLoaded', function() {
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioGuardado) {
        document.getElementById('nombre').value = usuarioGuardado.nombre;
        document.getElementById('apellido').value = usuarioGuardado.apellido;
        document.getElementById('correo').value = usuarioGuardado.correo;
        document.getElementById('nick').value = usuarioGuardado.nick;
    }

    const btnModificar = document.getElementById('btnModificar');
    btnModificar.addEventListener('click', function(){
        const contrasenaAntigua = document.getElementById('contrasenaAntigua').value;
        const contrasenaNueva = document.getElementById('contrasenaNueva').value;
        const confirmacionContrasena = document.getElementById('confirmacionContrasena').value;
        const mensajeErrorAntigua = document.getElementById('mensajeErrorAntigua');
        const mensajeErrorNueva = document.getElementById('mensajeErrorNueva');
        const mensajeErrorConfirmacion = document.getElementById('mensajeErrorConfirmacion');
        const mensajeGeneral = document.getElementById('mensajeGeneral');

        var contrasenaRegExp = /^[A-Za-z0-9*#$]{6,12}$/;

        if (contrasenaAntigua === "" || contrasenaNueva === "" || confirmacionContrasena === ""){
            mensajeGeneral.textContent = "Por favor, rellena todos los campos.";
            setTimeout(function(){
                mensajeGeneral.textContent = "";
            }, 3500);
        }else{
            if (contrasenaAntigua === usuarioGuardado.contrasena){
                if (contrasenaNueva !== contrasenaAntigua){
                    if (contrasenaNueva === confirmacionContrasena){
                        if (contrasenaRegExp.test(contrasenaNueva)) {
                            usuarioGuardado.contrasena = contrasenaNueva;
                            localStorage.setItem('usuario', JSON.stringify(usuarioGuardado));
                            mensajeGeneral.textContent = "¡Has cambiado tu contraseña exitosamente!";
                            setTimeout(function(){
                                mensajeCorrecto.textContent = "";
                            }, 3500);
                        } else {
                            mensajeErrorNueva.textContent = "El campo Contraseña tiene que tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales *#$.";
                            setTimeout(function(){
                                mensajeErrorNueva.textContent = "";
                            }, 3500);
                        }
                    }else{
                        mensajeErrorConfirmacion.textContent = 'La nueva contraseña y la confirmación no coinciden';
                        setTimeout(function(){
                            mensajeErrorConfirmacion.textContent = "";
                        }, 3500);
                    }
                }else{
                    mensajeErrorNueva.textContent = 'La contraseña nueva no puede ser igual a la contraseña antigua.';
                    setTimeout(function(){
                        mensajeErrorNueva.textContent = "";
                    }, 3500);
                }
            }else{
                mensajeErrorAntigua.textContent = 'La contraseña es incorrecta.';
                setTimeout(function(){
                    mensajeErrorAntigua.textContent = "";
                }, 3500);
            }
        }
    });
});
