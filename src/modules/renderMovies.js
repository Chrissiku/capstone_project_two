/* eslint-disable linebreak-style */
const fetchFromApi = async () => {
  let moviesArray = [];
  await fetch('https://api.tvmaze.com/shows?page=1')
    .then((response) => response.json())
    .then((response) => {
      moviesArray = response;
    });
  return moviesArray;
};

export default fetchFromApi;
