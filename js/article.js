const commentField = document.querySelector('.comment-field');
const like = document.querySelector('.likes');
const likesNumber = document.querySelector('.number');
const commentForm = document.querySelector('.comment-form');
const commentFeed = document.querySelector('.comment-feed');
const nameField = document.querySelector('.name');
const emailField = document.querySelector('.email');


commentField.oninput = function () {
  if (commentField.value.length > 200 || commentField.value.length < 10) {
    commentField.classList.add('warning');
    submitBtn.disabled = true;
  } else {
    commentField.classList.remove('warning');
    submitBtn.disabled = false;
  }
};
//if comment is too large or too short

like.onclick = function () {
  if (like.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  like.classList.toggle('added');
};
//likes-counter

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('div');
  let commentHeader = document.createElement('div');
  let avImg = document.createElement('img');;
  let headComment = document.createElement('h4');
  let textComment = document.createElement('p');

  newComment.classList.add('comment');
  commentHeader.classList.add('comment-header');
  avImg.classList.add('avatar');

  avImg.style.backgroundColor = "aquamarine";
  headComment.textContent = nameField.value;
  textComment.textContent = commentField.value;

//clear form
  commentField.value = '';
  nameField.value = '';
  emailField.value = '';

  commentHeader.append(avImg, headComment);
  newComment.append(commentHeader, textComment);
  commentFeed.append(newComment);
  
};
//add new comment