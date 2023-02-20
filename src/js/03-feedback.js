import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_Key = 'feedback-form-state';
const formData = {};

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_Key));
  const email = form.children[0].firstElementChild;
  const message = form.children[1].firstElementChild;

  if (savedData && savedData.email) {
    email.value = savedData.email;
  }

  if (savedData && savedData.message) {
    message.value = savedData.message;
  }
}

populateForm();

form.addEventListener('submit', event => {
  event.preventDefault();

  if (form.email.value && form.message.value) {
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_Key);
  } else {
    alert('Please fill out both email and message fields.');
  }
});

form.addEventListener(
  'input',
  throttle(() => {
    formData.email = form.email.value;
    formData.message = form.message.value;
    localStorage.setItem(STORAGE_Key, JSON.stringify(formData));
  }, 500)
);
