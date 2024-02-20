//Class 1: Reintroduction to Javascript

const myLearnableObject = { name: "Ernest", Age: 10 };

const myLearnableObject2 = {
  bestLanguage: "Javascript",
  YearsOfExperience: 10,
};

const myFavoriteCar = {
  firstCar: "Benz",
  secondCar: "Toyota",
};

const bestProgrammingLangugge = new Object();

bestProgrammingLangugge.firstLanguage = "Javascript";
bestProgrammingLangugge.secondLanguage = "Python";

//console.log(bestProgrammingLangugge);

/* console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E); */

/* console.log(Math.sqrt(16));
console.log(Math.pow(2, 4));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.SQRT1_2));
 */

//CLASS 2 : ARRAYS AND HIGHER ORDER FUNCTIONS

const myFavoriteCars = ["Toyota", "Audi", "Benz"];

/* console.log(myFavoriteCars);
console.log(myFavoriteCars[0]);
console.log(myFavoriteCars[1]);
console.log(myFavoriteCars[2]);
console.log(myFavoriteCars.length); */

const learnableGrades = [50, 90, 80, 10, 20];

/* const successfulCandidates = learnableGrades.filter((item) => item >= 50);

console.log(successfulCandidates);
 */
/* const learnableGradesMultiplyByTwo = learnableGrades.map((item) => item * 2);
console.log(learnableGradesMultiplyByTwo); */

const sumOfLearnableGrade = learnableGrades.reduce(
  (currentItem, accumulator) => currentItem + accumulator
);

//console.log(sumOfLearnableGrade);

//Class 3: DOM Manipulation
window.addEventListener("load", (event) => {
  /* console.log("Learnable is amazing");
  console.log(document.getElementById("register"));
  console.log(document.getElementsByClassName("myList"));
  console.log(document.getElementsByTagName("h1"));
  console.log(document.querySelector("#myHeader"));
  console.log(document.querySelector(".myList"));
  console.log(document.querySelectorAll(".myList")); */

  //Node relationship
  console.log(document.querySelector(".myList").parentNode);
  console.log(document.getElementById("myListContainer").childNodes);
  console.log(
    document.getElementById("myListContainer").firstElementChild.innerHTML
  );
  console.log(
    document.getElementById("myListContainer").lastElementChild.innerHTML
  );
  console.log(
    document.getElementById("thirdListItem").nextElementSibling.innerHTML
  );
  console.log(
    document.getElementById("thirdListItem").previousElementSibling.innerHTML
  );
});
