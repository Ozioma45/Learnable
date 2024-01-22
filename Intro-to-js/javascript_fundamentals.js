//var, let, const

/* let company = "Genesys";

console.log(company); */

//types of datatype : Primitive and Non-Primitive

//Primitive-Immutable,Stored directly
//const name = "John"; //string
//const age = 34; //integer
//const isTall = true; //boolean
//const house = null; //null
//const relationship = undefined; //undefined

//console.log(typeof name);

//Concatenation
//console.log(`My name is ${name} and I'm ${age} years old`);

//console.log("hello world".length);
//console.log("hello world".toUpperCase());
//console.log("Hello World".substring(6));

//Non-Primitive:Mutable,Stored by reference

//Arrays
//const scores = new Array(20, 34, 82);
//const scores = [20, 34, 82];

//console.log(scores);

//console.log(typeof scores);
//console.log(Array.isArray(scores));

//accessing array element
//console.log(scores[1]);

//array manipulation - push, unshift, pop, indexOf

/* scores.push(90);
scores.pop();

console.log(scores.indexOf(34)); */

//Object
/* const person = {
  name: "John",
  age: 34,
  inTall: true,
  address: {
    street: "No 1 genesys Street",
    city: "Enugu",
  },
};
 */
//console.log(person["address"]["city"]);
//console.log(person.address.city);

//Destructuring
//const [name, age] = scores;

//console.log(name);
/*  const name = person.name
 const age = person.age */

//OPERATORS

//Arithemetic Operators
/* console.log("Addition    ", 1 + 1);
console.log("Substraction    ", 5 - 4);
console.log("Multiplication    ", 4 * 2);
console.log("Division    ", 100 / 5);
console.log("Remainder    ", 14 % 5);
console.log("Exponential    ", 3 ** 3); */

//Logical Operators

/* console.log("NOT        ", !true);
console.log("AND        ", 1 && 1);
console.log("OR        ", 1 || 1);
console.log("Nullish coalescing        ", 0 ?? 3);
 */
//Comparison Operators

/* console.log("Greater than   ", 3 > 4);
console.log("less than   ", 3 < 4);
console.log("Greater than or equal   ", 3 >= 4);
console.log("less than or equal  ", 3 <= 4);
console.log("Equals   ", 3 == 4);
console.log("Not Equal   ", 3 != 4); */

//FLOWCONTROL

//IF..ELSE
/* const score = 55;
if (score <= 100 && score >= 80) {
  console.log("A");
} else if (score < 80 && score >= 60) {
  console.log("B");
} else if (score < 60 && score >= 50) {
  console.log("C");
} else {
  console.log("F");
} */

//Ternary Operator
/* const age = 14;
if (age >= 18) {
  console.log("true");
} else {
  console.log("false");
} */

/* const age = 14;
const isAdult = age >= 18 ? true : false;
console.log(isAdult); */

// Switch Statement
/* const dayOfTheWeek = 4;
switch (dayOfTheWeek) {
  case 1:
    console.log("it's weekend");
    break;
  case 7:
    console.log("it's weekend");
    break;
  default:
    console.log("its not weekend");
    break;
}
 */

//LOOPs

//for loops
/* const countries = ["Nigeria", "Kenya", "Ghana"];
for (let i = 0; i < countries.length; i++) {
  countries[i] = countries[i].toLocaleUpperCase();
}

console.log(countries); */

//While Loop
/* let i = 0;
while (20 > i) {
  console.log(i % 2 == 0 ? i : "");
  i++;
} */

//for..of (array)
/* const names = ["John", "Doe", "Bob"];
for (const name of names) {
  console.log(name.toLocaleUpperCase());
} */

//for...in(object)
/* const players = {
  Hervetz: {
    goals: 34,
    assist: 23,
  },
  Mount: {
    goals: 23,
    assist: 50,
  },
  James: {
    goals: 12,
    assist: 43,
  },
};

let sum = 0;
for (player in players) {
  console.log(players[player].goals);
  sum += players[player].goals;
}

console.log(sum); */

//Function

/* function add(x = 0, y = 0) {
  return x + y;
}

console.log(add(5, 19)); */

//Arrow Function
const add = (x = 0, y = 0) => x + y;

console.log(add(10, 20));
