//Shaun Gehrke, 01-20-14, Conditionals_worksheet
//This worksheet will work through example problems for our web programming fundamentals class
//Example Shut your face 1
/*
var competitorWeight = 275;
(competitorWeight > 250) ? console.log("The competitor qualifies for the heavyweight division.") : console.log("The comprtitor needs to gain some weight!");

*/



//Celsius to Fahrenheit converter
var degrees = prompt("Are you converting to Celsius or Fehrenheit? Please use C for Celsius and F for Fahrenheit.");//This will prompt the user to which conversion is needed

function toDegrees() {//This is the function that will run after they are prompted
degrees = (degrees.toUpperCase());//This will change any responce to upper case
console.log(degrees);//This will print the uppercase variable degrees
if (degrees === "C") {//This will run if the value of degrees comes back as "C"
	//Celsius temp to convert
	var fahrenheitTemp = prompt("What is the Fahrenheit temperature you would like to convert to Celsius?")//This will prompt the user and the entered data will be used in this variable
	//This is the conversion from celsius to fahrenheit
	var celsiusConversion = (fahrenheitTemp -32) *5 / 9;
	celsiusConversion = parseInt(celsiusConversion);//Rounds the converted temp to alert the user
	console.log(celsiusConversion);//Prints the rounded conversion
	alert("The teperature is " + celsiusConversion + "°C.");//This will alert the user of the result
} else if (degrees === "F") {//This will run only if the user enters an F when prompted
	//Celsius temp to convert
	console.log(degrees);
	var celsiusTemp = prompt("What is the Celsius temperature you would like to convert to Fahrenheit?");//This will prompt the user and the entered data will be used in this variable
	//This is the conversion from celsius to fahrenheit
	var fahrenheitConversion = celsiusTemp *9 / 5 + 32;//This is the equation for fahrenheit conversion
	fahrenheitConversion =  parseInt(fahrenheitConversion);//Rounds the converted temp to alert the user
	console.log(fahrenheitConversion);//Prints the rounded fahrenheit conversion
	alert("The teperature is " + fahrenheitConversion + "°F.")//This will alert the user of the result
} else {//This will run if not C or F 
	degrees = prompt("Please enter a valid capital C for Celsius conversion, or a capital F for Fahrenheit.");//This will prompt the user to enter a valid answer
	console.log(degrees);//prints to console the degrees variable
	toDegrees();//This will run the function again
	}

}

toDegrees();//This will call the function to run




