//Shaun Gehrke, 01-20-14, Conditionals_worksheet
//This worksheet will work through example problems for our web programming fundamentals class
//Example Shut your face 1
/*
var competitorWeight = 275;
(competitorWeight > 250) ? console.log("The competitor qualifies for the heavyweight division.") : console.log("The comprtitor needs to gain some weight!");

*/
/*

//Celsius to Fahrenheit converter
var degrees = prompt("Are you converting to Celsius or Fehrenheit? Please use C for Celsius and F for Fahrenheit.");
var degrees = (degrees.toUpperCase());
console.log(degrees);

switch (degrees) {
	default: prompt("Please enter a valid capital C for Celsius conversion, or a capital F for Fahrenheit.");
	console.log("first one");
	case "C": console.log("One")	
	break;
	case "F":  console.log("two")
	break;

}
*/
//Celsius temp to convert
var celsiusTemp = 32//This will prompt the user and the entered data will be used in this variable
//This is the conversion from celsius to fahrenheit
var fahrenheitConversion = celsiusTemp *9 / 5 + 32;
var fahrenheitConversion =  Math.round(fahrenheitConversion);//Rounds the converted temp to alert the user
console.log(fahrenheitConversion);
alert("The teperature is " + fahrenheitConversion + "°F.")





//Celsius temp to convert
var fahrenheitTemp = 90//This will prompt the user and the entered data will be used in this variable
//This is the conversion from celsius to fahrenheit
var celsiusConversion = (fahrenheitTemp -32) *5 / 9;
var celsiusConversion = Math.round(celsiusConversion);//Rounds the converted temp to alert the user
console.log(celsiusConversion);
alert("The teperature is " + celsiusConversion + "°C.")


