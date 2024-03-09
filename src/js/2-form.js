const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


// Зберігаємо дані форми в локальне сховище
const updateFormData = () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// Відстежуємо зміни в полях форми
form.addEventListener('input', updateFormData);

// Оновлюємо форму даними з локального сховища
const loadFormData = () => {
  const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedState) {
    emailInput.value = savedState.email;
    messageInput.value = savedState.message;
  }
};

// Очищаємо форму та локальне сховище
const clearForm = () => {
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
};

// Обробка сабміту форми
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Перевірка заповнення полів
  if (!emailInput.value.trim() && !messageInput.value.trim()) {
    alert('Please fill in all required fields');
    return;
  }

  // Виводимо дані форми в консоль
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  console.log(formData);

  // Очищаємо форму та локальне сховище
  clearForm();
});

// Завантаження даних з локального сховища при завантаженні сторінки
window.addEventListener('load', loadFormData);