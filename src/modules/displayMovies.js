/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */

export default async () => {
  fetch("https://api.tvmaze.com/seasons/1/episodes")
    .then((data) => {
      return data.json();
    })

    .then((completedata) => {
      let data1 = "";
      completedata.forEach((values, index) => {
        data1 += `
        <div class="main-card" id="main-card">
          <img src="${values.image.medium}" alt="img" />
          <div class="list-movies">
            <h2 class="title">${`${values.name.substring(0, 20)}`}</h2>
            <div>
              <button type="button" class="like"><i class="fa-solid fa-thumbs-up"></i><span>0</span></button>
            </div>
          </div>
          <div class="card-text">        
            <p>${`${values.summary.substring(0, 95)} ...`}</p>
          </div>
            <button type="button" data-id="${index}" class="comment-btn" id="commentBtn">Read more & comments</button>
        </div>`;
      });
      document.getElementById("container").innerHTML = data1;
      return document.querySelectorAll(".comment-popup");
    })
    .catch((err) => {
      alert(err);
    });
};
