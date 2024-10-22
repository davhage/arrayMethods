const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
const form = document.getElementById('formId');
let array = [];

const submitForm = (e) => {
  e.preventDefault();
  console.log('prevented');
};

const checkButton = () => {
    console.log('button clicked');
};

form.addEventListener('submit', submitForm);
buttons.forEach(button => {
    button.addEventListener('click', checkButton);
})

