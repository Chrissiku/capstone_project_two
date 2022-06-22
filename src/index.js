/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import "./css/style.css";
import render from "./modules/displayLike.js";
import "./modules/likesAPI.js";

fetch("https://api.tvmaze.com/seasons/1/episodes")
  .then((data) => {
    return data.json();
  })

  .then((completedata) => {
    let data1 = "";
    completedata.map((values) => {
      data1 += `
        <div class="main" id="main">
        <img src=${values.image.medium} alt="img">
        <div class="list-movies">
            <h2 class="title">${values.name}</h2>
            <img class='heart' src="../src/assets/images/love.png" alt='heart'>
            <button type="button" class="like">like</button></div>
        <button>comments</button>
        <button>Reservation</button>
      </div>`;
    });
    document.getElementById("popup").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });

render();
