const feedbackForm = document.querySelector('.feedback-form');

const keyForStorage = 'feedback-form-state';

const input = feedbackForm.elements.email;

const textarea = feedbackForm.elements.message;

const storageValue = lokalStorage.getItem(keyForStorage);

if (storageValue) {
  try {
    const objectForm = JSON.parse(storageValue);

    if (objectForm.email && objectForm.message) {
      input.value = objectForm.email;
      textarea.value = objectForm.message;
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

feedbackForm.addEventListener('input', () => {
  const feedback = {
    email: input.value.trim(),
    message: textarea.value.trim(),
  };

  lokalStorage.setItem(keyForStorage, JSON.stringify(feedback));
});

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value.trim() === '' || textarea.value.trim() === '') {
    alert('You need to write a message!');
    return;
  }

  localStorage.removeItem(keyForStorage);
  console.log({
    email: input.value.trim(),
    message: textarea.value.trim(),
  });
  feedbackForm.reset();
});
