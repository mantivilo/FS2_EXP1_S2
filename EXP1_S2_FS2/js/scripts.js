// js/scripts.js
function validarFormulario() {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const email = document.getElementById('email').value;
    const clave = document.getElementById('clave').value;
    const repetirClave = document.getElementById('repetirClave').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const direccionDespacho = document.getElementById('direccionDespacho').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const claveRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;
    const hoy = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();

    if (!email.match(emailRegex)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    if (clave !== repetirClave) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    if (!clave.match(claveRegex)) {
        alert('La contraseña debe contener al menos un número, una letra en mayúscula, y tener entre 6 y 18 caracteres.');
        return false;
    }

    if (edad < 13 || (edad === 13 && mes < 0)) {
        alert('Debe tener al menos 13 años para registrarse.');
        return false;
    }

    return true;
}
