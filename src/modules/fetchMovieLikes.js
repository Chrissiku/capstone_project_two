/* eslint-disable linebreak-style */
/* eslint-disable import/no-duplicates */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
const fetchMovieLikes = async () => {
  let likedItems = [];
  await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bj33OEQX34RPwoGeJ8eJ/likes",
  )
    .then((response) => response.json())
    .then((res) => (likedItems = res));
  return likedItems;
};

export default fetchMovieLikes;
