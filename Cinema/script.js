const poltronas = document.querySelectorAll('.poltrona');
const mensagem = document.getElementById('mensagem');

poltronas.forEach(poltrona => {
  poltrona.addEventListener('click', () => {
    if (poltrona.classList.contains('reservada')) {
      mensagem.textContent = 'Poltrona reservada';
      
      // Remove a mensagem após 3 segundos
      setTimeout(() => {
        mensagem.textContent = '';
      }, 3000);

      return;
    }
    poltrona.classList.add('reservada');
    poltrona.textContent = 'x';
    mensagem.textContent = ''; // limpa mensagem ao reservar nova poltrona
  });
});
