document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formularioContacto');

  if (formulario) {
    formulario.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const tipoOrquidea = document.getElementById('tipoOrquidea').value;
      const fecha = document.getElementById('fecha').value;
      const mensaje = document.getElementById('mensaje').value.trim();

      
      if (nombre === '' || email === '' || telefono === '' || tipoOrquidea === '' || fecha === '' || mensaje === '') {
        Swal.fire({
          icon: 'error',
          title: 'Campos Incompletos',
          text: 'Por favor, completa los 6 campos del formulario.',
          confirmButtonColor: '#b39ddb'
        });
        return;
      }

      
      const datosContacto = { nombre, email, telefono, tipoOrquidea, fecha, mensaje, registro: new Date() };
      localStorage.setItem('ultimoContacto', JSON.stringify(datosContacto));

      
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje Enviado!',
        text: `Gracias ${nombre}, hemos registrado tu solicitud para el ${fecha}. Nos pondremos en contacto contigo pronto.`,
        confirmButtonColor: '#b39ddb'
      });

      formulario.reset();
    });
  }
});