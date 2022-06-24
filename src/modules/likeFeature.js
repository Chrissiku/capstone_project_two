/* eslint-disable linebreak-style */
import fetchFromApi from './renderMovies.js';
import postLike from './likesApi.js';

const likeMovie = async () => {
  const allMovies = await fetchFromApi();

  const likesBtn = document.querySelectorAll('.like');
  const spans = document.querySelectorAll('#count-like');
  likesBtn.forEach((a, i) => {
    let h = JSON.parse(spans[i].innerHTML);

    a.addEventListener('click', () => {
      postLike(allMovies[i].name);
      h += 1;
      spans[i].innerHTML = h;
    });
  });
};

export default likeMovie;
