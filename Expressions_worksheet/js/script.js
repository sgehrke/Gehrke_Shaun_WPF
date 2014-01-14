//Shaun Gehrke, 01-13-14, Expressions_worksheet

//Dog Years
var actualAge = 5;//This variable can change with any given for Sparky's age 5 is just an example
const dogYears = 7;//This will never change cause a dog ages 7 times faster than a human
var sparkyDogAge = (actualAge * dogYears);//An expression using variables to calculate Sparky's age in human years
//print out the result
console.log("Sparky is " + actualAge + " human years old which is " + sparkyDogAge  + " in dog years.");

//Slice of Pie part 1
var pizzaSliceEach = 10;//This line describes the amount of slices per pizza
var numberStudents = 50;//This line is set to the number of students eating the pizza
var numberPizzas = 30;//This is the number of pizzas ordered
var totalSlices = (pizzaSliceEach * numberPizzas);//This line will calculate the total number of slices available to all the students
var result = (totalSlices / numberStudents);//This line is will calculate the nmber of slices each student will receive
console.log("Each person ate " + result + " slices of pizza at the party");//This will print the String and the amount of slices each student ate
