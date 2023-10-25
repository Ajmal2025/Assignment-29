"use strict";
// 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["apple", "orange", "banana"];
let favorite_fruits2 = ["pongrate", "peer", "grapes"];
console.log(favorite_fruits);
if (favorite_fruits[1] === "peer") {
    console.log(`You dont like ${favorite_fruits[0]}`);
}
else if (favorite_fruits[2] === "grapes") {
    console.log(`You dont like ${favorite_fruits[1]}`);
}
else if (favorite_fruits[2] === "banana") {
    console.log(`Your favorite fruit is ${favorite_fruits[2]}`);
}
else {
    console.log(`You dont like any fruits`);
}
