const confirmButton = document.getElementById('confirmButton');
const ageForm = document.getElementById('ageForm');
const submitAge = document.getElementById('submitAge');

confirmButton.addEventListener('click', () => {
  confirmButton.style.display = 'none';
  ageForm.style.display = 'block';
});

submitAge.addEventListener('click', () => {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear();

  if (age >= 18) {
    alert('¡Bienvenido! Eres mayor de edad.');
    window.location.href = '../index.html';
  } else {
    alert('Lo siento, debes ser mayor de edad para continuar.');
  }
});
