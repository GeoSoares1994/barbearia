// Menu hambúrguer toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Formulário funcional simples
const form = document.getElementById('form-orcamento');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Obrigado! Seu orçamento foi enviado com sucesso.');
  form.reset();
});
