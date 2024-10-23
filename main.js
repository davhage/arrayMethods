const input = document.querySelector('input');
const form = document.getElementById('formId');
const push = document.getElementById('push');
const unshift = document.getElementById('unshift');
const pop = document.getElementById('pop');
const shift = document.getElementById('shift');
const result = document.getElementById('result');

let array = [];

const pushNumber = () => {
  array.push(input.value);
  result.innerHTML = array;
};
const unshiftNumber = () => {
  array.unshift(input.value);
  result.innerHTML = array;
};

const popNumber = () => {
  array.pop(array);
  result.innerHTML = array;
};

const shiftNumber = () => {
  array.shift(array);
  result.innerHTML = array;
};

form.addEventListener('submit', submitForm = (e) => e.preventDefault());
push.addEventListener('click', pushNumber);
unshift.addEventListener('click', unshiftNumber);
pop.addEventListener('click', popNumber);
shift.addEventListener('click', shiftNumber);
