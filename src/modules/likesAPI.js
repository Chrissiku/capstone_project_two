/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const likesApi = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t5kglK2SXwpjguYAvFPP/likes";

export const getLikes = async () => {
  const response = await fetch(likesApi);
  const showLikes = await response.json();
  return showLikes;
};

export const putLikes = async (idShow) => {
  await fetch(likesApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item_id: idShow }),
  });
};
