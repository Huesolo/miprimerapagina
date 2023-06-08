document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
    document.querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });

const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  console.log('Nombre:', name);
  console.log('Email:', email);
  console.log('Mensaje:', message);

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  alert('¡Formulario enviado con éxito!');
});
