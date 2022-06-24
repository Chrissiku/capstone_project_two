/* eslint-disable linebreak-style */
/* eslint-disable import/no-duplicates */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import "./css/style.css";
// import render from "./modules/displayMovies.js";
import movies from "./modules/pageBody.js";
import likeMovie from "./modules/likeFeature.js";

const body = document.querySelector("body");
movies();

body.addEventListener("click", () => {
  likeMovie();
});
