
//USAGE 1
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("gender")); // Output: false

// USAGE 2
const obj = {
  username: "bijit",
  age: 20,
};

const keysArr = Object.keys(obj);
const valuesArr = Object.values(obj);

console.log(keysArr);   // Output: ["username", "age"]
console.log(valuesArr); // Output: ["bijit", 20]
