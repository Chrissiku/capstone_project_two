/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
const commentPopup = document.querySelector(".comment-popup");
// const openPopup = document.querySelector(".comment-btn");

const closePopup = document.querySelector(".close-comment-bn");

closePopup.addEventListener("click", () => {
  commentPopup.style.display = "none";
});
