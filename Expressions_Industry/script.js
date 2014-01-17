//Shaun Gehrke, 01-15-14, Expressions_Indusrty
//This will calculate an instant quote for my DJ service
alert("Congratulation on your upcoming wedding and thank you for contacting The New Dance Machine DJ service!\nYou will now be asked a sequence of questions so we can custom build a DJ Package for your wedding.");//This is a welcome alert explaining what the javascript will run
const BOOTHPRICE = 175;//This is a constant that will be used in the total formula
const DJRATE = 150; //This is a constant that will be used in the total formula
const LIGHTRATE = 30;//This is a constant that will be used in the total formula

var weddingMonth = prompt("What month are you getting married?");//This line will start a string that will be the entire wedding date
var weddingDate = prompt("What is the date of the wedding?");//This line will prompt the user for their date…This should be a number
var weddingYear = prompt("What year is your wedding?");//This will prompt the user to add the year of their wedding
var weddingDateString =  weddingMonth + " " + weddingDate + ", " + weddingYear;//This var will concatenate the above variables into one string
console.log(weddingDateString);//This will print to the console with the what the wedding date is together

var packageArray = [];//This line creates a container for the documents variables
packageArray[0] = prompt("How many hours of Dj service do you require?");//This array will store in the 0 index and be used in a later calculation
packageArray[1] = packageArray[0] * DJRATE;//This array will multiply hours needed with the rate
console.log(packageArray[1]);//This will print the dj total part to the console
packageArray[2] = prompt("To put that elegant touch on your wedding we suggest adding accent lighting also known as up-lighting, to your venue. One light will cover a 20 foot area.\nHow many lights do you require?");//This will prompt the user asking how many light they require and store in array 2
//console.log(packageArray[2]);//This will print to console the users amount entered
if (isNaN(packageArray[2])) { //This is a fail safe in case the user puts in a word
	packageArray[2] = 0;// if the user returns a word this will make it a 0
	alert("You have entered an invalid number, there will be no lights added to your package.");//Here the will be alerted that a mistake has occured and that there will be no lights added to their package
}
packageArray[3] = LIGHTRATE * Number(packageArray[2]);//This is the calculation per light for the uplighting - there is also a failsafe here with Number()
console.log(packageArray[3]);//This will print the results of array 3 in the console
packageArray[4] = prompt("Would you like to add a photo booth to your event?");//this will prompt the user to see if they want a photo booth
if (packageArray[4].length >= 3) {//This array counts the letters in the users response to array 4 to determine whether they entered yes or no
	packageArray[5] = prompt("How many hours would you like the booth for?");//This will appear only if they said yes to the above question
	packageArray[6] = packageArray[5] * BOOTHPRICE;//This is the calculation for the photo booth
	console.log(packageArray[6]);//This prints the photo booths total to the console
	packageArray[7] = packageArray[1] + packageArray[3] + packageArray[6];//This array calculates the instant quote if all things are needed
	console.log ("Your total estimate for your wedding on " + weddingDateString + " is $" + packageArray[7] + ".");//This will print to the console the final total
	alert("The total estimate for your wedding on " + weddingDateString + " is $" + packageArray[7] + ", please call to lock in this price."); //This will alert the user as to their final total
} else {
	packageArray[8] = packageArray[1] + packageArray[3];//This array will only show if the user chose not to include a photobooth	
	console.log("Your total estimate for your wedding on " + weddingDateString + " is $" + packageArray[8] + ".");//This is what will print to the console for the total estimate
	alert("The total estimate for your wedding on " + weddingDateString + " is $" + packageArray[8] + ", please call to lock in this price.");//This is the alert to the user for the entire estimate
}

