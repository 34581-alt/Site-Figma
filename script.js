const elementos = document.querySelectorAll('.reveal');

if (!('IntersectionObserver' in window)) {
  elementos.forEach((elemento) => elemento.classList.add('in'));
} else {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('in');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.2 });

  elementos.forEach((elemento) => observador.observe(elemento));
}
