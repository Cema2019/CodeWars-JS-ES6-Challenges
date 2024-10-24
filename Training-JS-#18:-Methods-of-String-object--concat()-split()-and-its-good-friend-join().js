// Title: Training JS #18: Methods of String object
// Link: https://www.codewars.com/kata/57280481e8118511f7000ffa

/*The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"*/

function splitAndMerge(string, separator) {
  return string.split(" ").map(s => s.split('').join(separator)).join(" ");
}
