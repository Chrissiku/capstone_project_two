/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import { getCharData, getCharLikes } from "./retrieveApis.js";

export default async () => {
  const charArray = await getCharData();
  let likeArray = await getCharLikes();
  const container = document.querySelector(".container");
  charArray.forEach((element, index) => {
    const title = element.name.substring(0, 15);
    container.innerHTML += `
   <div class="main-card" id="main-card">
          <img
            src="${element.imageUrl}"
            alt="img"
          />
          <div class="list-movies">
            <h2 class="title">${title}</h2>
            <div>
              <button type="button" class="like">
                <i class="fa-solid fa-thumbs-up"></i><span class="likesCounter">${likeArray[index].likes}</span>
              </button>
            </div>
          </div>
          <div class="card-text">
            <p>Some text</p>
          </div>
          <button data-id="${index}" type="button" class="comment-btn" id="commentBtn">
            Read more & comments
          </button>
        </div>
    `;
  });
  const likeButton = document.querySelectorAll(".like");
  const likeContainer = document.querySelectorAll(".likesCounter");
  likeButton.forEach((element, index) => {
    element.addEventListener("click", async () => {
      await fetch(
        "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/likes",
        {
          method: "POST",
          body: JSON.stringify({
            item_id: `item${index}`,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      likeArray = await getCharLikes();
      likeContainer[index].innerHTML = `${likeArray[index].likes}`;
    });
  });

  return document.querySelectorAll(".comment-btn");
};
