/* TODO: Add if else error message for invalid input */

const inputFields = document.querySelectorAll('.text-type');
const errorMessage = document.querySelectorAll('.error-message');

for(let i = 0; i < inputFields.length; i++){
    inputFields[i].addEventListener('input', () => {
        errorMessage[i].textContent = 'Sorry, invalid format here';
        errorMessage[i].style.display = 'block';
        errorMessage[i].style.color = 'red';
        inputFields[i].style.borderBottom = '1px solid red';
    });
}

