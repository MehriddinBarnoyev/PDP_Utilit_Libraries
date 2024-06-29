import _ from "lodash";

// Mashq 1
const cunks = _.chunk(["a", "b", "c", "d", "e", "f", "g", "h"], 2);
console.log("Mashq 1: " + cunks);

// Mashq 2
const compact = _.compact([0, 1, false, 2, "", 3, null, 0, 5, 10, undefined]);
console.log("Mashq 2: " + compact);

// Mashq 3
var array = [1, 0];
var other = _.concat(array, 2, [4, 7, [8, 9]]);
console.log("Mashq 3: " + other);

// Mashq 4
const count01 = _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
console.log("Mashq 4: " + count01);

// Mashq 5
var users = [
  { user: "Mehriddin", age: 20, active: true },
  { user: "Ramziddin", age: 10, active: false },
];

const users01 = _.filter(users, function (o) {
  return !o.active;
});
console.log(users01);

const users02 = _.filter(users, { age: 20, active: true });
console.log(users02);

const users03 = _.filter(users, "active");
console.log(users03);

//Mashq 6

const task6 = _.findLast([1, 2, 3, 4], function (n) {
  return n % 2 == 1;
});
console.log(task6);

//Mashq 7

function duplicate(n) {
  return [n, n];
}

const task7 = _.flatMap([5, 6, 7], duplicate);

console.log(task7);

//Mashq 8

const task8 = _.map(["6", "8", "10"], _.ary(parseInt, 1));
// => [6, 8, 10]
console.log(task8);

//Mashq 9

const task9 = _.isDate(new Date());
console.log(task9);

const task09 = _.isDate("Mon April 23 2012");

console.log(task09);

// Mashq 10

const task10 = _.isNumber(`3`)
console.log(task10);

const task010 = _.isNumber(3)
console.log(task010);