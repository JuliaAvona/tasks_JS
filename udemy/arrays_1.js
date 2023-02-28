const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  const result = arr.filter((film) => film.rating >= 8);
  return result;
}

function showListOfFilms(arr) {
  let result = "";
  arr.forEach((film) => (result += film.name + ", "));
  return result.slice(0, -2);
}

function setFilmsIds(arr) {
  arr.forEach(function (item, i) {
    item.id = i;
  });
  return arr;
}
setFilmsIds(films);

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  let result = arr.every((elem) => elem.hasOwnProperty("id"));
  return result;
}
