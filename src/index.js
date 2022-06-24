/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import "./css/style.css";
import renderMovies from "./modules/pageBody.js";
import likeMovie from "./modules/likeFeature.js";
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */

renderMovies();
const body = document.querySelector("body");

body.addEventListener("click", () => {
  likeMovie();
});
