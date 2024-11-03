document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let asunto = document.getElementById('asunto').value;
        let mensaje = document.getElementById('mensaje').value;

        // Validación de los campos
        if (nombre.trim() === '') {
            Swal.fire("El campo nombre no puede estar vacío.");
            return;
        }

        if(nombre.length > 50) {
            Swal.fire("El campo nombre excede el largo permitido"); 
            return ;
        }

        if (email.trim() === '') {
             Swal.fire("El campo email no puede estar vacío.");
            return;
        }

        if (!validarEmail(email)) {
            Swal.fire("El formato del email no es válido.");
            return;
        }

        if (asunto.trim() === '') {
            Swal.fire("El campo asunto no puede estar vacio.");
            return;
        }

        if(asunto.length > 50) {
            Swal.fire("El campo asunto excede el largo permitido"); 
            return ;
        }

        if (mensaje.trim() === '') {
            Swal.fire("El campo mensaje no puede estar vacio.");
            return;
        }

        if(mensaje.length > 300) {
            Swal.fire("El campo mensaje excede el largo permitido"); 
            return ;
        }

        Swal.fire({
            title: "Validacion Exitosa!",
            text: "Se registro correctamenet!",
            icon: "success"
          });

    });

    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});