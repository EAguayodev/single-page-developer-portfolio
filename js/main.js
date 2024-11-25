/* TODO: Add if else error message for invalid input */

const inputFields = document.querySelectorAll('.text-type');
const errorMessage = document.querySelectorAll('.error-message');

for(let i = 0; i < inputFields.length; i++){
    inputFields[i].addEventListener('input', () => {
        errorMessage[i].textContent = 'Sorry, invalid format here';
        errorMessage[i].style.color = '#FF6F5B';
        inputFields[i].style.borderBottom = '1px solid #FF6F5B';
    });
}

