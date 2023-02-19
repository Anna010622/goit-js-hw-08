import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_Key = 'feedback-form-state';
const formData = {};

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_Key));
  const email = form.children[0].firstElementChild;
  const message = form.children[1].firstElementChild;
  console.log(savedData);

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
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_Key);
});

form.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_Key, JSON.stringify(formData));
  }, 500)
);
