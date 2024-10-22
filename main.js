const input = document.querySelector('input');
const form = document.getElementById('formId');
const push = document.getElementById('push');
const unshift = document.getElementById('unshift');
const pop = document.getElementById('pop');
const shift = document.getElementById('shift');
// const result = document.getElementById('result');

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
  console.log(array, 'button push clicked');
};
const unshiftNumber = () => {
  array.unshift(input.value);
  console.log(array, 'button unshift clicked');
};

const popNumber = () => {
  array.pop(array);
  console.log(array, 'button pop clicked');
};

const shiftNumber = () => {
  array.shift(array);
  console.log(array, 'button shift clicked');
};

form.addEventListener('submit', submitForm);
push.addEventListener('click', pushNumber);
unshift.addEventListener('click', unshiftNumber);
pop.addEventListener('click', popNumber);
shift.addEventListener('click', shiftNumber);


console.log(array);
