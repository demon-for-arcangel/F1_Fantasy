document.addEventListener("DOMContentLoaded",(function(){const e=JSON.parse(localStorage.getItem("usuario"));e&&(document.getElementById("nombre").value=e.nombre,document.getElementById("apellido").value=e.apellido,document.getElementById("correo").value=e.correo,document.getElementById("nick").value=e.nick),document.getElementById("btnModificar").addEventListener("click",(function(){const t=document.getElementById("contrasenaAntigua").value,n=document.getElementById("contrasenaNueva").value,o=document.getElementById("confirmacionContrasena").value,a=document.getElementById("mensajeErrorAntigua"),c=document.getElementById("mensajeErrorNueva"),r=document.getElementById("mensajeErrorConfirmacion"),u=document.getElementById("mensajeGeneral");""===t||""===n||""===o?(u.textContent="Por favor, rellena todos los campos.",setTimeout((function(){u.textContent=""}),3500)):t===e.contrasena?n!==t?n===o?/^[A-Za-z0-9*#$]{6,12}$/.test(n)?(e.contrasena=n,localStorage.setItem("usuario",JSON.stringify(e)),u.textContent="¡Has cambiado tu contraseña exitosamente!",setTimeout((function(){mensajeCorrecto.textContent=""}),3500)):(c.textContent="El campo Contraseña tiene que tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales *#$.",setTimeout((function(){c.textContent=""}),3500)):(r.textContent="La nueva contraseña y la confirmación no coinciden",setTimeout((function(){r.textContent=""}),3500)):(c.textContent="La contraseña nueva no puede ser igual a la contraseña antigua.",setTimeout((function(){c.textContent=""}),3500)):(a.textContent="La contraseña es incorrecta.",setTimeout((function(){a.textContent=""}),3500))}))}));