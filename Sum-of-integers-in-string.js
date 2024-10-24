// Title: Sum of integers in string
// Link: https://www.codewars.com/kata/598f76a44f613e0e0b000026

/*Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.*/

function sumOfIntegersInString(s) {
  const matches = s.match(/\d+/g) || []; // Default to an empty array if no matches
    return matches.map(Number).reduce((a, b) => a + b, 0);
}
