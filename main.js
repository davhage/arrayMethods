const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
const form = document.getElementById('formId');
const push = document.getElementById('push');
const unshift = document.getElementById('unshift');
const insert = document.getElementById('insert');
const pop = document.getElementById('pop');
const shift = document.getElementById('shift');
const remove = document.getElementById('remove');

let array = [];

const submitForm = (e) => {
  e.preventDefault();
  console.log('prevented');
};

const checkButton = () => {
  console.log('button clicked');
};

const pushNumber = () => {
  array.push(input.value);
  console.log(array);
};
const unshiftNumber = () => {
  array.unshift(input.value);
  console.log(array);
};

form.addEventListener('submit', submitForm);
push.addEventListener('click', pushNumber);


console.log(array);
