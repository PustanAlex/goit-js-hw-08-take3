
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

const saveFormState = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const populateFormFields = () => {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (formData) {
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
};

const throttledSaveFormState = throttle(saveFormState, 500);
form.addEventListener('input', throttledSaveFormState);

populateFormFields();

form.addEventListener('submit', handleSubmit);