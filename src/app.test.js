/* eslint-disable quotes */
const movies = require("./__mock__/countMovies.js");
const comments = require("./__mock__/countComment.js");

const firstTestArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
const secondTestArray = ["a", "b", "c"];
const thirdTestArray = ["a", "b", "c", "d", "e"];

// Count movies

describe("1. Should test Number of movies", () => {
  test("First array test", () => {
    expect(movies(firstTestArray)).toBe(8);
  });
  test("Second array test", () => {
    expect(movies(secondTestArray)).toBe(3);
  });
  test("Third array test", () => {
    expect(movies(thirdTestArray)).toBe(5);
  });
});

// Count comments

const firstCommentList = [
  {
    username: "Chris",
    comment: "I like This",
  },
  {
    username: "Bruk",
    comment: "I like This",
  },
  {
    username: "Siku",
    comment: "I like This",
  },
  {
    username: "Teshome",
    comment: "I like This",
  },
  {
    username: "Mohamed",
    comment: "I like This",
  },
  {
    username: "Amos",
    comment: "I like This",
  },
];

const secondCommentList = [
  {
    username: "Jane Doe",
    comment: "I like This",
  },
  {
    username: "Sam",
    comment: "I like This",
  },
  {
    username: "John",
    comment: "I like This",
  },
  {
    username: "Ruth",
    comment: "I like This",
  },
  {
    username: "Mary",
    comment: "I like This",
  },
];

const thirdCommentList = [
  {
    username: "Jane",
    comment: "I like This",
  },
  {
    username: "Ruth",
    comment: "I like This",
  },
  {
    username: "Mary",
    comment: "I like This",
  },
];

describe("2. Should test the number of comments on each movie", () => {
  test("Test Number of comments in first comment list", () => {
    expect(comments(firstCommentList)).toBe(6);
  });
  test("Test Number of comments in second comment list", () => {
    expect(comments(secondCommentList)).toBe(5);
  });
  test("Test Number of comments in third comment list", () => {
    expect(comments(thirdCommentList)).toBe(3);
  });
});
