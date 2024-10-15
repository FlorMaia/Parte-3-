document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const Rol = document.getElementById('rol').value;


    if (nombre && apellido && fechaNacimiento && email && telefono && Rol) {

        alert('Registro exitoso!');
    } else {
        alert('Por favor, complete todos los campos');
    }
});