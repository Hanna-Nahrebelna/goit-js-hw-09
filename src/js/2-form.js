document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.feedback-form');

    // Функція для збереження даних у локальне сховище
    function saveToLocalStorage() {
        const formData = {
            email: form.elements.email.value.trim(),
            message: form.elements.message.value.trim()
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }

    // Функція для заповнення форми даними з локального сховища
    function fillFormFromLocalStorage() {
        const savedData = localStorage.getItem('feedback-form-state');
        if (savedData) {
            const formData = JSON.parse(savedData);
            form.elements.email.value = formData.email;
            form.elements.message.value = formData.message;
        }
    }

    // Під час завантаження сторінки заповнюємо форму даними з локального сховища
    fillFormFromLocalStorage();

    // Відслідковуємо подію input на формі та зберігаємо дані в локальне сховище
    form.addEventListener('input', saveToLocalStorage);

    // Під час відправлення форми виводимо дані в консоль та очищуємо локальне сховище та поля форми
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Попереджаємо стандартне повернення форми

        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();

        if (email === '' || message === '') {
        alert('Please fill in all fields.');        
        } else {
        console.log({ email, message });
        localStorage.removeItem('feedback-form-state');
        form.reset();
        }
    });
});
