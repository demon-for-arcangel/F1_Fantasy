const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

if (usuarioGuardado) {
    document.getElementById('nombre').value = usuarioGuardado.nombre;
    document.getElementById('apellido').value = usuarioGuardado.apellido;
    document.getElementById('correo').value = usuarioGuardado.correo;
    document.getElementById('nick').value = usuarioGuardado.nick;
}