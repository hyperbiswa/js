/*
[USEFUL TIPS]

(/)  => The forward slash character indicates the start of the regular expression pattern.
(g) => it will find all matches in the input string, rather than just the first match.
($) => character in a regular expression in JavaScript is used to match the end of a string.
*/
let getMatch = (string) => {
  return string.match(/[0-9+\-*]+/g);
};
console.log(getMatch('hello 8+8')); //output: ['8+8']

let isGirlName = (name) => {
  return /(li|ya|ja|ta|shi|i|a)$/i.test(name);
};
console.log(isGirlName('riki'));

let matchedStr = (string, list) => {
  let count = 0;
  for (let i of list) {
    if (string.includes(i)) {
      count++;
    }
  }
  return count;
};
console.log(matchedStr('hello world hahaha', ['hello', 'world']));
