/* eslint-disable linebreak-style */
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
      <div class="main-card" id="main-card">
        <img src="${values.image.medium}" alt="img" />
        <div class="list-movies">
          <h2 class="title">${`${values.name.slice(0, 20)}`}</h2>
          <div>
            <button type="button" class="like"><i class="fa-solid fa-thumbs-up"></i><span>0</span></button>
          </div>
        </div>
        <div class="card-text">        
          <p>${`${values.summary.slice(0, 95)} ...`}</p>
        </div>
          <button type="button" class="comment-btn">Read more & comments</button>
      </div>`;
    });
    document.getElementById("container").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });

render();
