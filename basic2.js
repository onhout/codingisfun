/**
 * Created by pl on 5/12/15.
 */
// Problem 1
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
    first_variable = "Not anymore!!!";
    console.log(first_variable)
}
console.log(first_variable);

//Solution to prob1
var first_variable;
console.log(first_variable);
first_variable = "Yipee I was first!";
function firstFunc(){
    var first_variable;
    first_variable = "Not anymore!!!";
    console.log(first_variable);
}
console.log(first_variable);

// Problem 2
var food = "Chicken";
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone"; // NOTE I'M TRYING TO TRICK YOU HERE!!!!
}
eat();
console.log(food);
//Solution to problem 2
var food;
food="Chicken";
function eat(){
    var food;
    food = "half-chicken";
    console.log(food);
    food = "gone";
}
eat();
console.log(food);
// Problem 3
var new1 = "NEW!"; //'new' gave errors in the IDE, changing it.
function lastFunc() {
    new1 = "old";
}
console.log(new1);

//Solution to problem 3
var new1;
new1 = "NEW!";
function lastFunc(){
    var new1;
    new1 = "old";
}
console.log(new1);