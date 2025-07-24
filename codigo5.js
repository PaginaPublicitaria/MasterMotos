// Buscar productos al escribir
document.getElementById('buscador').addEventListener('input', function () {
  const valor = this.value.toLowerCase();
  const tarjetas = document.querySelectorAll('.categoria');

  let algunoVisible = false;

  tarjetas.forEach(tarjeta => {
    const texto = tarjeta.innerText.toLowerCase();
    if (texto.includes(valor)) {
      tarjeta.style.display = 'block';
      algunoVisible = true;
    } else {
      tarjeta.style.display = 'none';
    }
  });

  const mensaje = document.getElementById('mensaje-vacio');
  if (mensaje) {
    mensaje.style.display = algunoVisible ? 'none' : 'block';
  }
});

// Mostrar imagen en modal
function mostrarImagen(src) {
  document.getElementById('imagenExpandida').src = src;
  const modal = new bootstrap.Modal(document.getElementById('imagenModal'));
  modal.show();
}

// Filtrar por categoría
function filtrarCategoria(categoria) {
  const tarjetas = document.querySelectorAll('.categoria');
  const valorBusqueda = document.getElementById('buscador').value.toLowerCase();

  let algunoVisible = false;

  tarjetas.forEach(tarjeta => {
    const perteneceCategoria = categoria === 'todos' || tarjeta.classList.contains(categoria);
    const coincideBusqueda = tarjeta.innerText.toLowerCase().includes(valorBusqueda);

    if (perteneceCategoria && coincideBusqueda) {
      tarjeta.style.display = 'block';
      algunoVisible = true;
    } else {
      tarjeta.style.display = 'none';
    }
  });

  const mensaje = document.getElementById('mensaje-vacio');
  if (mensaje) {
    mensaje.style.display = algunoVisible ? 'none' : 'block';
  }
}
