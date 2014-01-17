//Shaun Gehrke, 01-15-14, Expressions_Indusrty
//This will calculate an instant quote for my DJ service
alert("Congratulation on your upcoming wedding and thank you for contacting The New Dance Machine DJ service!\nYou will now be asked a sequence of questions so we can custom build a DJ Package for your wedding.");//This is a welcome alert explaining what the javascript will run
const BOOTHPRICE = 175;//This is a constant that will be used in the total formula
const DJRATE = 150; //This is a constant that will be used in the total formula
const LIGHTRATE = 30;//This is a constant that will be used in the total formula

var weddingMonth = prompt("What month are you getting married?");//This line will start a string that will be the entire wedding date
var weddingDate = prompt("What is the date of the wedding");//This line will prompt the user for their date…This should be a number
var weddingYear = prompt("What year is your wedding?");//This will prompt the user to add the year of their wedding
var weddingDateString =  weddingMonth + " " + weddingDate + ", " + weddingYear;//This var will concatenate the above variables into one string
console.log(weddingDateString);//This will print to the console with the what the wedding date is together


