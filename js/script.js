const cards = document.querySelectorAll('.card');
const select = document.querySelector('select');
const filter  = document.querySelector('.filter');
//for tag-filter (index.html)
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const messageField = document.querySelector('#message');
const submitBtn = document.querySelector('.submit-btn');
//for contact-form (index.html)



filter.onchange = function () {
  for (let card of cards) {
    if(card.dataset.category !== select.value && filter.value !== 'all'){
      card.classList.add('hidden');
    } else {
      card.classList.remove('hidden');
    }
  }
};
//for filter

nameField.oninput = function () {
  if (nameField.value.length > 200 || nameField.value.length < 10) {
    nameField.classList.add('warning');
    submitBtn.disabled = true;
  } else {
    nameField.classList.remove('warning');
    submitBtn.disabled = false;
  }
};
//if name is too large or too short

emailField.oninput = function () {
  if (emailField.value.length > 200 || emailField.value.length < 10) {
    emailField.classList.add('warning');
    submitBtn.disabled = true;
    console.log('ok');
  } else {
    emailField.classList.remove('warning');
    submitBtn.disabled = false;
  }
};
//if email is too large or too short

messageField.oninput = function () {
  if (messageField.value.length > 200 || messageField.value.length < 10) {
    messageField.classList.add('warning');
    submitBtn.disabled = true;
  } else {
    messageField.classList.remove('warning');
    submitBtn.disabled = false;
  }
};
//if message is too large or too short

