
/* eslint-disable quotes */
import "./css/style.css";
import renderMovies from "./modules/pageBody.js";
import likeMovie from "./modules/likeFeature.js";

renderMovies();
const body = document.querySelector("body");

body.addEventListener("click", () => {
  likeMovie();
});
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import "./css/style.css";

import eventListners from "./utils/commentPopUp.js";
import itemsCounter from "./utils/itemsCounter.js";

eventListners();
itemsCounter();
