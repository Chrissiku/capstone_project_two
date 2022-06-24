/* eslint-disable linebreak-style */
const fetchMovieLikes = async () => {
  let likedItems = [];
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bj33OEQX34RPwoGeJ8eJ/likes',
  )
    .then((response) => response.json())
    .then((res) => {
      likedItems = res;
      return likedItems;
    });
  return likedItems;
};

export default fetchMovieLikes;
