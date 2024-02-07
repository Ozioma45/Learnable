//let res1 = new RegExp("abc");
//let res2 = /abc/.test("abc");

// console.log(res2);

// class 2
//a pattern that starts with a digit
//let res3 = /\d./.test("23 hello");
//console.log(res3);

//class 3
//quintifiers +, *, .
const set1 = /\d{5,8}/.test("90123");

//console.log(set1);
//true

// + quantifiers AT LEAST ONE
// * IF THE PATTERN OCCUR ZERO OR MORE TIMES
// ? optional quantifier
// \s for string (uppercase)
const set2 = /^\d\S+@\S+\.?\S+$/.test("45hello@gmail.com");
//console.log(set2);

//MATCHES AND GROUPS
const match = /^\S+.\d+$/.exec("one 100");
console.log(match);
