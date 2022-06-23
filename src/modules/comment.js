/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */

import render from "./displayMovies.js";

const getCharData = async () => {
  const response = await fetch("https://api.tvmaze.com/seasons/1/episodes");
  const json = await response.json();
  return json.data;
};

const closePopup = () => {
  const container = document.querySelector(".comment-popup");
  container.style.display = "none";
};

export default async () => {
  const commentButton = await render();
  const chaArray = await getCharData();
  const container = document.querySelector(".comment-popup");
  commentButton.forEach((element) => {
    const dataID = element.getAttribute("data-id");
    element.addEventListener("click", async () => {
      let response = await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments?item_id=item${dataID}`
      );
      let comments = await response.json();
      const title = chaArray[dataID].name.substring(0, 15);
      container.innerHTML = `
      <div class="comment-modal">
        <button type="button" class="close-comment-bn">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="card-details">
          <img
            src="${chaArray[dataID].imageUrl}"
            alt="Card original image"
          />
          <h3>${title}</h3>
          <ul class="more-info">
            <li>
              <span><strong> Date </strong>: ${chaArray[dataID].tvShows.length}</span>
              <span><strong> Time </strong>: ${chaArray[dataID].videoGames.length}</span>
            </li>
            <li>
              <span><strong> View time </strong>: 60 Minutes${chaArray[dataID].films.length}</span>
              <span><strong> Rating </strong>: average (${chaArray[dataID].enemies.length})</span>
            </li>
          </ul>
          <div class="card-comment">
            <h3 class="comment-heading">Comments (${comments.length})</h3>
            <div class="comment-area">
              <div class="comment-list">
                <p>2013-07-01 : So amazing</p>
                <p>2013-07-01 : So amazing</p>
              </div>
              <form autocomplete="off" class="comment-form" id="comment-form">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Your Insight"
                  required
                ></textarea>
                <button type="submit">Comment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
            `;

      const commentsContainer = document.querySelector(".comment-list");
      comments.forEach((element) => {
        commentsContainer.innerHTML += `
              <p>${element.creation_date} | ${element.username} : ${element.comment}</p>`;
      });

      const form = document.querySelector(".comment-form");
      const commentsCounter = document.querySelector(".comment-heading");
      form.addEventListener("submit", async (event) => {
        const UserName = form.elements[0].value;
        const UserComment = form.elements[1].value;
        event.preventDefault();
        await fetch(
          "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments",
          {
            method: "POST",
            body: JSON.stringify({
              item_id: `item${dataID}`,
              username: UserName,
              comment: UserComment,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        response = await fetch(
          `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments?item_id=item${dataID}`
        );
        comments = await response.json();
        commentsContainer.innerHTML = "";
        comments.forEach((element) => {
          commentsContainer.innerHTML += `<p>${element.creation_date} | ${element.username} : ${element.comment}</p>`;
        });
        commentsCounter.innerHTML = `Comments(${comments.length})`;
        form.reset();
      });

      container.style.display = "block";

      const closeButton = document.querySelector(".close-comment-bn");
      closeButton.addEventListener("click", closePopup);
    });
  });
};
