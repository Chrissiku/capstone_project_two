const movies = (arr) => {
  let length;
  arr.forEach((element, i) => {
    length = i + 1;
  });
  return length;
};

// export default movies;
module.exports = movies;
