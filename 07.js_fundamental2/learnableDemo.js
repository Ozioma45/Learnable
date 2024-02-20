/* import {
  myFavoriteFood as ernestFavoritefood,
  myFavoriteFootballClub,
  ernestAge,
} from "./learnableDemo2.js"; */

import * as myValues from "./learnableDemo2.js";

//console.log(myValues);

//console.log(`Ernest Favorite food is ${ernestFavoritefood}`);
//console.log(`Ernest Favorite football club is ${myFavoriteFootballClub}`);
//console.log(`Ernest is ${ernestAge} years old`);

//import anyThing from "./learnableDemo2.js";

///console.log(anyThing);

//Class 5 : JS Module System
/* console.log("First Call");
console.log("Second Call");

setTimeout(() => {
  console.log("Third Call");
}, 10000);

console.log("Fourth Call");
console.log("Fifth Call"); */
/* 
const myNewPromise = new Promise((reolve, reject) => {
  const status = false;
  if (status) {
    reolve("this promise was resolved");
    return;
  }
  reject("This Promise was rejected!!");
});

console.log(
  myNewPromise
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
); */

/* const nameTest = () => {
  fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) =>
      console.log(data.results.map((character) => character.name))
    ) // Extract the name from the fetched data
    .catch((error) => console.log(error));
};

const getStarWarsCharacter = () => {
  fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

getStarWarsCharacter();
nameTest(); */

const getStarWarsCharacter = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const result = await response.json();
  console.log(result);
};

getStarWarsCharacter();
