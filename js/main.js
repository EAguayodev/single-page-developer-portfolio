/* TODO: Add if else error message for invalid input */
const form = document.getElementById('contactForm');
const inputFields = document.querySelectorAll('.text-type');
const errorMessage = document.querySelectorAll('.error-message');
const btnMessage = document.querySelector('.btn-message');  

for(let i = 0; i < inputFields.length; i++){
    inputFields[i].addEventListener('input', () => {
        errorMessage[i].textContent = 'Sorry, invalid format here';
        errorMessage[i].style.display = 'block';
        errorMessage[i].style.color = '#FF6F5B';
        inputFields[i].style.borderBottom = '1px solid #FF6F5B';
    });
}


// Submit form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, message]);
    checkEmail(email);
});

