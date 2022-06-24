/* eslint-disable linebreak-style */
import './css/style.css';
import renderMovies from './modules/pageBody.js';
import likeMovie from './modules/likeFeature.js';

renderMovies();
const body = document.querySelector('body');

body.addEventListener('click', () => {
  likeMovie();
});
