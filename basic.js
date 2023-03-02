// usage of toFixed()
var str11 = '123.456';
var num11 = Number(str11);
var formatted11 = num11.toFixed(1);
console.log(formatted11); // "123.5"

//usage of charAt
var str12 = 'Hello, world!';
var chars12 = str12.charAt(0) + str12.charAt(6) + str12.charAt(11);
console.log(chars12); // "Hwd"
//stract numbers from string 
const str14 = "55+87-98-";
const regex14 = /\d+/g; // Matches one or more digits

const numbers14 = str14.match(regex14); // Returns an array of matched numbers

console.log(numbers14); // Output: ["55", "87", "98"]

//usage of substring
var str13 = 'Hello, world!';
var sub13 = str13.substring(7, 12);
console.log(sub13); // "world"

function myFunction(a, b, c) {
  console.log(a, b, c);
}
var arr = [1, 2, 3];
myFunction(...arr); // logs "1 2 3" to the console

var arr = [1, 2, 3, 4, 5];
var index = arr.indexOf(6);
if (index !== -1) {
  console.log('Value found at index ' + index);
} else {
  console.log('Value not found in array');
}

let lis = ['helo', 'hoi', 'okay'];
let r = lis[Math.floor(Math.random() * lis.length)];
console.log(r);
let abc = ['kool', 'aaaa', 'jjjaja', 'bbb'].sort((x, y) => x.localeCompare(y));
console.log(abc);
let bc = [5, 66, 4, 77].sort((x, y) => y - x);
console.log(Math.max(...bc));
console.log(Math.min(...bc));
let color = (leters = '0123456789ABCDEF') => {
  let c = '#';
  for (let i = 0; i < 6; i++) {
    c += leters[Math.floor(Math.random() * leters.length)];
  }
  return c;
};
console.log(color());
