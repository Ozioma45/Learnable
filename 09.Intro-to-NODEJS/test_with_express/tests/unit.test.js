const {
  addNumbers,
  divideNumbers,
  multiplyNumbers,
  minusNumbers,
} = require("../utils");

const a = 4,
  b = 8;

const addedNumber = a + b;
const dividedNumber = b / a;
const multipliedNumber = a * b;
const minusedNumber = b - a;

describe("calculator Tests", () => {
  test("Addition of 2 numbers", () => {
    expect(addNumbers(a, b)).toBe(addedNumber);
    expect(addNumbers(a, b)).not.toBe(dividedNumber);
  });

  test("Division of 2 numbers", () => {
    expect(divideNumbers(b, a)).toBe(dividedNumber);
    expect(typeof divideNumbers(b, a)).toBe("number");
    expect(divideNumbers(b, a)).toEqual(dividedNumber);
  });

  //write test for multiplication
  test("Nultiplication of 2 numbers", () => {
    expect(multiplyNumbers(b, a)).toBe(multipliedNumber);
    expect(typeof multiplyNumbers(b, a)).toBe("number");
    expect(multiplyNumbers(b, a)).not.toBe(dividedNumber);
  });

  //write test for substraction
  test("Substraction of 2 numbers", () => {
    expect(minusNumbers(b, a)).toBe(minusedNumber);
    expect(multiplyNumbers(b, a)).toEqual(minusedNumber);
    expect(multiplyNumbers(b, a)).not.toBe(dividedNumber);
  });
});
