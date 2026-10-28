document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formularioContacto');

  if (formulario) {
    formulario.addEventListener('submit', (e) => {
      e.preventDefault(); // Detiene recarga nativa de página (Criterio 3.5)

      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const tipoOrquidea = document.getElementById('tipoOrquidea').value;
      const mensaje = document.getElementById('mensaje').value.trim();

      // Validación simple Front-End
      if (nombre === '' || email === '' || mensaje === '' || tipoOrquidea === '') {
        Swal.fire({
          icon: 'error',
          title: 'Campos Incompletos',
          text: 'Por favor, llena todos los campos solicitados.',
          confirmButtonColor: '#8a73b9'
        });
        return;
      }

      // Guardar datos en localStorage (Criterio 3.6)
      const datosContacto = { nombre, email, tipoOrquidea, mensaje, fecha: new Date() };
      localStorage.setItem('ultimoContacto', JSON.stringify(datosContacto));

      // Feedback interactivo con SweetAlert2 (Criterio 3.6)
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje Enviado!',
        text: `Gracias ${nombre}, hemos recibido tu mensaje correctamente sobre la orquídea ${tipoOrquidea}.`,
        confirmButtonColor: '#8a73b9'
      });

      formulario.reset();
    });
  }
});