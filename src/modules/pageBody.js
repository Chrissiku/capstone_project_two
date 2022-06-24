import fetchFromApi from './renderMovies.js';
import fetchMovieLikes from './fetchMovieLikes.js';

const commentModal = document.getElementById('comment-popup');
let count = 0;
const counter = document.getElementById('count');
const moviesCards = document.getElementById('container');
let currentValue = 0;

const appId = 'jQcwh1wRBsAT8XgABb4X';
const invUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const fetchComments = async (itemId) => {
  try {
    const comments = await fetch(`${invUrl}?item_id=${itemId}`);
    const data = await comments.json();
    const commentHead = document.querySelector('.comm-header');
    const commentList = document.querySelector('.comment-list');
    if (data.length > 0) {
      commentHead.innerHTML = `Comments(${data.length})`;
      commentList.innerHTML = '';
      data.forEach((comm) => {
        const commentItem = `        
        <p>${comm.creation_date} ${comm.username}: ${comm.comment}</p>
      `;
        commentList.innerHTML += commentItem;
      });
    } else {
      commentHead.innerHTML = 'Comments(0)';
      const noComment = `
      <p>No comment on this post</p>
      `;
      commentList.innerHTML = noComment;
    }
  } catch (err) {
    throw new Error('Request error: ', err);
  }
};

const postComment = async (itemId) => {
  const username = document.querySelector('.username');
  const comment = document.querySelector('.usermassage');

  if (username.value !== '' || comment.value !== '') {
    try {
      const response = await fetch(invUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          item_id: itemId,
          username: username.value,
          comment: comment.value,
        }),
      });
      const data = response.text();
      if (response.ok) {
        username.value = '';
        comment.value = '';
        fetchComments(itemId);
        return data;
      }
    } catch (err) {
      throw new Error('Request error: ', err);
    }
    return true;
  }
  return false;
};

const closePopupModal = () => {
  const closeIcon = document.querySelector('#close');
  closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    commentModal.style.display = 'none';
  });
};

const showCommentModal = async () => {
  const arr = await fetchFromApi();
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((commentBtn) => {
    const btnId = commentBtn.getAttribute('id');
    const movieDetails = arr[btnId];
    commentBtn.addEventListener('click', () => {
      fetchComments(btnId);
      const modal = `          
      <div class="comment-modal">
      <button type="button" id="close" class="close-comment-bn">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="card-details">
        <img src="${movieDetails.image.original}" alt="Card original image" />
        <h3>${movieDetails.name}</h3>
        <ul class="more-info">
          <li>
            <span><strong> Language </strong>: ${movieDetails.language}</span>
            <span><strong> Genre </strong>: ${movieDetails.genres}</span>
          </li>
          <li>
            <span><strong> Runtime </strong>: ${movieDetails.runtime} minutes</span>
            <span><strong> premiered </strong>: ${movieDetails.premiered}</span>
          </li>
        </ul>
        <p class="summary">${movieDetails.summary}</p>
        <div class="card-comment">
          <h3 class="comm-header"></h3>
          <div class="comment-area">
            <div class="comment-list">
            </div>
            <form autocomplete="off" id="comment-form">
              <input type="text" class="username" name="name" id="name" placeholder="Your name"/>
              <textarea name="message" class="usermassage" id="" cols="30" rows="5" placeholder="Your Insight" ></textarea>
              <button class="new-comment" id="${btnId}" type="button">Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
      `;

      commentModal.innerHTML = modal;
      commentModal.style.display = 'block';
      closePopupModal();

      const cmntBtn = document.querySelector('.new-comment');
      cmntBtn.addEventListener('click', () => {
        postComment(btnId);
      });
    });
  });
};

// Render all Movies card
const renderMovies = async () => {
  const arr = await fetchFromApi();
  arr.slice(0, 10).forEach((movie) => {
    fetchMovieLikes().then((res) => {
      currentValue = res;
      let assignLike = 0;

      const like = currentValue.filter(
        (element) => element.item_id === movie.name,
      );
      if (like.length === 0) {
        assignLike = 0;
      } else {
        assignLike = like[0].likes;
      }
      moviesCards.innerHTML += `
        <div class="main-card" id="${arr.indexOf(movie)}">
          <img src="${movie.image.medium}" alt="${movie.name}" />
          <div class="list-movies">
            <h2 class="title">${`${movie.name.substring(0, 15)}`}</h2>
            <div>
              <button type="button" class="like"><i class="fa-solid fa-thumbs-up"></i><span id="count-like">${assignLike}</span></button>
            </div>
          </div>
          <div class="card-text">        
            <p>${`${movie.summary.substring(0, 80)} ...`}</p>
          </div>
            <button type="button" class="comment-btn" id="${arr.indexOf(
    movie,
  )}">Read more & comments</button>
        </div>`;
      showCommentModal();
    });

    count += 1;
  });

  counter.innerText = `(${count * 2})`;
  counter.style.color = 'red';
};

export default renderMovies;
