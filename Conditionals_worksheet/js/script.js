//Shaun Gehrke, 01-20-14, Conditionals_worksheet
//This worksheet will work through example problems for our web programming fundamentals class
//Example Shut your face 1

var competitorWeight = 275;
(competitorWeight > 250) ? console.log("The competitor qualifies for the heavyweight division.") : console.log("The comprtitor needs to gain some weight!");



//Group 1
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


//Group 2 - Check the Login

const USERNAME = "Walter";//The username the user must use
const PASSWORD = "White";//The password the user must use
console.log(USERNAME + " " + PASSWORD);//Prints both so I can see

alert("Your Username = Walter \nYour Password = White");//Shows a pop-up to indicate the criteria that needs to be entered
var username = prompt("Enter your Username")//Prompts the user to enter a username
var password = prompt("Enter your Password");//Prompts the user to enter a password

if ( (username === USERNAME) && (password === PASSWORD) ) {
	alert("Welcome, " + USERNAME + "!");//Alerts the user only if the above is true
} else if ( username != USERNAME) {
	alert("User not found. Try again.")//Alerts the user of error if invalid username is entered
} else { 
	alert("Password does not match our records.");//If none of the above are true than the password must be invalid
}



//Group 3 - Movie Tickets
const FULLTICKET = "$12";//The constant for full price tickets
const DISCTICKET = "$7";//The constant for discounted tickets

var custAge = prompt("How old are you?");//Prompts the user for their age
console.log(custAge);//Prints their entered age
var movieTime = prompt("What time is your movie?");//Prompts for their movie time
console.log(movieTime);//Prints what they entered for movie time

if ( (custAge < 10) || (custAge > 55) ) {
	alert("The ticket price is " + DISCTICKET);//Will alert the user only if the customers age is less than 10 or 55 and older
	console.log(custAge);//Prints the sustomer age
} else if ( (movieTime >= 3) && (movieTime <= 5) ) {
	alert("The ticket price is " + DISCTICKET);//Alerts the user of their discounted ticket price
	console.log(movieTime);
} else {
	alert("The ticket price is " + FULLTICKET);//If no other statements are true then they wil receive this ticket price
	console.log(FULLTICKET);
}



