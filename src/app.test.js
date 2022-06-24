/* eslint-disable quotes */
const movies = require("./__mock__/countMovies.js");

const firstTestArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
const secondTestArray = ["a", "b", "c"];
const thirdTestArray = ["a", "b", "c", "d", "e"];

describe("Test Number of movies", () => {
  test("First array test", () => {
    expect(movies(firstTestArray)).toBe(8);
  });
  test("Seconf array test", () => {
    expect(movies(secondTestArray)).toBe(3);
  });
  test("Third array test", () => {
    expect(movies(thirdTestArray)).toBe(5);
  });
});
