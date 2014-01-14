//Shaun Gehrke, 01-13-14, Expressions_worksheet

//Dog Years
var actualAge = 5;//This variable can change with any given for Sparky's age 5 is just an example
const dogYears = 7;//This will never change cause a dog ages 7 times faster than a human
var sparkyDogAge = (actualAge * dogYears);//An expression using variables to calculate Sparky's age in human years
//print out the result
console.log("Sparky is " + actualAge + " human years old which is " + sparkyDogAge  + " in dog years.");

//Slice of Pie part 1
var pizzaSliceEach = 10;
var numberStudents = 50;
var numberPizzas = 30;
var totalSlices = (pizzaSliceEach * numberPizzas);
var result = (totalSlices / numberStudents);
console.log("Each person ate " + result + " slices of pizza at the party");
