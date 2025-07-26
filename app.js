function esDispositivoMovil() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

function mostrarFuncionesBasicas() {
  const divExplicacion = document.getElementById('explicacion-funciones');

  if (esDispositivoMovil()) {
    divExplicacion.innerHTML = `
      <p>Pulsa en cualquier parte de la pantalla (menos los botones) para cambiar las palabras.</p>
      <p>Pulsa el botón ♫ para cambiar el beat.</p>
      <p>Haz doble clic en el botón ♫ para volver al beat anterior.</p>
      <p>Pulsa los botones ❚❚ / ▶ para pausar o reproducir el beat.</p>
      <p>Pulsa el botón 🏠︎ para volver al inicio.</p>
    `;
  } else {
    divExplicacion.innerHTML = `
      <p>Haz clic en cualquier parte de la pantalla (menos los botones) o pulsa <strong>barra espaciadora</strong> para cambiar las palabras.</p>
      <p>Pulsa el botón ♫ o la <strong>flecha derecha</strong> para cambiar el beat.</p>
      <p>Haz doble clic en el botón ♫ o pulsa la <strong>flecha izquierda</strong> para volver al beat anterior.</p>
      <p>Pulsa los botones ❚❚ / ▶ o la tecla <strong>P</strong> para pausar o reproducir el beat.</p>
      <p>Pulsa el botón 🏠︎ o la tecla <strong>Esc</strong> para volver al inicio.</p>
    `;
  }
}

function mostrarPantallaInicio() {
  document.getElementById('pantalla-bienvenida').style.display = 'none';
  document.getElementById('pantalla-inicio').style.display = 'flex';
}

function iniciarApp() {
  if (!localStorage.getItem('bienvenidaMostrada')) {
    document.getElementById('pantalla-bienvenida').style.display = 'flex';
    document.getElementById('pantalla-inicio').style.display = 'none';
    mostrarFuncionesBasicas();

    document.getElementById('btn-continuar').addEventListener('click', () => {
      localStorage.setItem('bienvenidaMostrada', 'true');
      mostrarPantallaInicio();
    });
  } else {
    mostrarPantallaInicio();
  }
}

window.onload = () => {
  iniciarApp();
};
