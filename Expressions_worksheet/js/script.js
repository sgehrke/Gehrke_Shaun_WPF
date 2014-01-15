//Shaun Gehrke, 01-13-14, Expressions_worksheet

//Dog Years
var actualAge = 5;//This variable can change with any given for Sparky's age 5 is just an example
const DOGYEARS = 7;//This will never change cause a dog ages 7 times faster than a human
var sparkyDogAge = actualAge * DOGYEARS;//An expression using variables to calculate Sparky's age in human years
//print out the result
console.log("Sparky is " + actualAge + " human years old which is " + sparkyDogAge  + " in dog years.");

//Slice of Pie part 1
var pizzaSliceEach = 29;//This line describes the amount of slices per pizza
var numberStudents = 10;//This line is set to the number of students eating the pizza
var numberPizzas = 4;//This is the number of pizzas ordered
var totalSlices = pizzaSliceEach * numberPizzas;//This line will calculate the total number of slices available to all the students
var result = totalSlices / numberStudents;//This line is will calculate the nmber of slices each student will receive
console.log("Each person ate " + result + " slices of pizza at the party.");//This will print the String and the amount of slices each student ate

//Slice of Pie part II
var sparkySlices = totalSlices % numberStudents;//This line of code uses the % calculation to fing the remaining slices available for Sparky - The variables from part one are used to find the result
console.log("Sparky got " + sparkySlices + " slices of pizza.");//This line will print the amount of slices for Sparky

//Average shopping bill
var weeksGroceries = [100, 200, 145, 125, 110];//This is an Array with amounts fo the weeks groceries 
var weeks = 5;//This line contains the number of weeks contained in the Array
var weeklyTotal = weeksGroceries[0] + weeksGroceries[1] + weeksGroceries[2] + weeksGroceries[3] + weeksGroceries[4];//This line takes the values from the Array and adds together each index to create a sum
var weeklyAverage = weeklyTotal / weeks;//This line takes the sum of the weekly total and divides it by the number of weeks
console.log("You have spent a total of $" + weeklyTotal + " on groceries over " + weeks + " weeks. That is an average of $" + weeklyAverage + " per week.");//Prints the required information

//Discounts
var item = "Coat"//Describes the item
var originalPrice = 100;//This Line contains the items original price
var discountRate = 20;//This is the discount percentage as a whole number
var salesTaxRate = 5;//This is the sales tax number as a whole number
var discountPercentage = discountRate / 100;//This is the equation to convert the dicount into a percentage
var salesTaxPercentage = salesTaxRate / 100;//This is the equation to convert the sales tax into a percentage
var discount = originalPrice * discountPercentage;//This is the calculation to figure out the discount
var discountPrice = originalPrice - discount;//This line subtracts the original price and the discount
var salesTax = discountPrice * salesTaxPercentage;//This line calculates the sales tax on the discounted price
var afterTax = discountPrice + salesTax;//This line Adds the sales tax to the discount price
console.log("Your " + item + " was originally $" + originalPrice + ", but after a " + discountRate + "% discount, it is now $" + discountPrice + " without taxes, and $" + afterTax + " with tax.");//This line prints the results 



