(()=>{"use strict";var e,t={765:(e,t,n)=>{n.d(t,{UR:()=>r});const r={nombre:"Marina",apellido:"Laguna",correo:"marinalaguna2004@gmail.com",contrasena:"admin123",nick:"marina"}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=r(765),document.querySelector('input[value="Registrarse"]').addEventListener("click",(function(){var t=document.getElementById("nombre").value,n=document.getElementById("apellido").value,r=document.getElementById("contrasena").value,a=document.getElementById("verificacionContrasena").value,o=document.getElementById("correo").value,c=document.getElementById("nick").value,s=[],i=document.getElementById("errorNombre");/^[A-Za-z]{2,20}$/.test(t)?i.textContent="":(s.push("El campo Nombre tiene que tener entre 2 y 20 caracteres."),i.textContent="El campo Nombre tiene que tener entre 2 y 20 letras.");var l=document.getElementById("errorApellido");/^[A-Za-z]{2,30}$/.test(n)?l.textContent="":(s.push("El campo Apellido tiene que tener entre 2 y 30 caracteres."),l.textContent="El campo Apellido tiene que tener entre 2 y 30 letras.");var d=document.getElementById("errorContrasena");/^[A-Za-z0-9*#$]{6,12}$/.test(r)?d.textContent="":(s.push("El campo Contraseña tiene que tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales *#$."),d.textContent="El campo Contraseña tiene que tener entre 6 y 12 caracteres y puede contener los siguientes caracteres especiales *#$.");var u=document.getElementById("errorVerificacionContrasena");r!==a?(s.push("La verificación de contraseña no coincide con la contraseña."),u.textContent="La verificación de contraseña no coincide con la contraseña."):u.textContent="";var m=document.getElementById("errorCorreo");/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(o)?m.textContent="":(s.push("Asegúrate de que no haya caracteres especiales incorrectos y que el dominio tenga al menos dos letras en su extensión."),m.textContent="Asegúrate de que no haya caracteres especiales incorrectos y que el dominio tenga al menos dos letras en su extensión.");var p=document.getElementById("errorNick");if(/^[A-Za-z_]{4,10}$/.test(c)?p.textContent="":(s.push("El campo Nick debe tener entre 4 y 10 caracteres y no puede contener caracteres especiales salvo (_ .)"),p.textContent="El campo Nick debe tener entre 4 y 10 caracteres y no puede contener caracteres especiales salvo (_ .)"),0===s.length)return e.UR.nombre=t,e.UR.apellido=n,e.UR.contrasena=r,e.UR.correo=o,e.UR.nick=c,localStorage.setItem("usuario",JSON.stringify(e.UR)),window.location.href="index.html",!1})),document.getElementById("btnIniciarSesion").addEventListener("click",(function(){window.location.href="../html/index.html"}))})();