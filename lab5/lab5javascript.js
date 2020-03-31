"use strict";
// 1.	Define a function max() that takes two numbers as arguments and returns
// the largest of them. Use the if-then-else construct available in Javascript.
function max(a, b) {
  if (a > b) return a;
  if (a < b) return b;
  return "equal";
}
// 2.Define a function maxOfThree() that takes three numbers
// as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
  return [a, b, c].sort()[2];
}
// 3.Write a function isVowel() that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.
function isVowel(a) {
  let arr = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < arr.length; i++) {
    if (a.indexOf(arr[i]) === -1) {
      return false;
    }
  }
  return true;
}
// Define a function sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10,
// and multiply([1,2,3,4]) should return 24.
// Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)

function sum(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }

  return sum;
}

function multiply(arr) {
  let product = 1;
  for (var i = 0; i < arr.length; i++) {
    product = arr[i] * product;
  }

  return product;
}
// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str) {
  let rev = "";
  for (var i = 0; i < str.length; i++) {
    rev = str[i] + rev;
  }

  return rev;
}
// Write a function findLongestWord() that takes an array of words and returns
// the length of the longest one.
function findLongestWord(arr) {
  let len = arr[0].length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > len) len = arr[i].length;
  }

  return len;
}
// Write a function filterLongWords() that takes an array of words and an integer i and returns a new
// array containing only those words that were longer than i characters.
function filterLongWords(arr, len) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > len) newArr.push(arr[i]);
  }

  return newArr;
}
//Write a function named, computeSumOfSquares, that takes as input, an array of numbers and
// calculates and returns the sum of the squares of each number in the input array. E.g.
// computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. Note: Write your Javascript
// code without using Imperative programming. i.e.
// Do NOT use any explicit looping construct; instead use functional programming style/approach.
function computeSumOfSquares(arr) {
  let sum = 0;
  arr.map(i => {
    sum = sum + i * i;
  });

  return sum;
}
//Write a function named, printOddNumbersOnly, that takes as input,
// an array of integral numbers and it finds and prints only the numbers which are odd.
function printOddNumbersOnly(arr) {
  let sum = 0;
  arr.map(i => {
    if (i % 2 !== 0) console.log(i);
  });
}
//Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input,
// an array of integral numbers and calculates and returns the sum of the squares of only the
// even numbers in the input array. E.g.
// computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
function computeSumOfSquaresOfEvensOnly(arr) {
  let sum = 0;
  arr.map(i => {
    if (i % 2 == 0) sum = sum + i * i;
  });
  return sum;
}
//Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…)
//  (defined in Problem 4 above) without using Imperative programming. i.e. Do NOT use any explicit
//  looping construct;
// instead use functional programming style/approach.
function sum(arr) {
  let sum = arr.reduce((t, i) => t + i, 0);

  return sum;
}

function multiply(arr) {
  let mul = arr.reduce((t, i) => t * i, 1);

  return mul;
}
// Implement Javascript code for a function named, findSecondBiggest, which takes as input,
// an array of numbers and finds and returns the second biggest of the numbers. For example,
// findSecondBiggest([1,2,3,4,5]) should return 4.
//  And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)
function findSecondBiggest(arr, k) {
  let L = [];
  let E = [];
  let G = [];
  let pvt = arr[arr.length - 1];
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < pvt) {
      L.push(arr[i]);
    } else if (arr[i] > pvt) {
      G.push(arr[i]);
    } else {
      E.push(arr[i]);
    }
  }
  if (k <= L.length) {
    return findSecondBiggest(L, k);
  } else if (k > L.length + E.length) {
    return findSecondBiggest(G, k - (L.length + E.length));
  } else {
    return E;
  }
}
// Write a function named printFibo, that takes as input, a given length, n, and any two starting
//  numbers a and b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…)
//  of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output;
//   printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1",
//    as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and
// printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

function fib(n, a, b) {
  let arr = [a, b];
  for (var i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
