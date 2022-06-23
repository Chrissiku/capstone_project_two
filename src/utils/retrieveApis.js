/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
const getCharData = async () => {
  const response = await fetch("https://api.disneyapi.dev/characters");
  const json = await response.json();
  return json.data;
};

const getCharLikes = async () => {
  const response = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/likes",
  );
  const json = await response.json();
  return json;
};

export { getCharData, getCharLikes };
