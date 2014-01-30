//Shaun Gehrke, 01-29-14, Functions_Indusrty
//This calculator will estimate the cost of your new web site

const EMAILCOST = 30;
//Thiswill prompt the user as to what tis javascript does
alert("So your ready to join the the modern world and get a website made for your company!\nThis estimator will give you an idea of how much that will cost you.");

var myArray = [];

var compName = prompt("What is the name of your company?");
console.log(compName);

var siteType = prompt("What type of site do you require?\n1) Static\n2) Dynamic\n3) Template based");
console.log(siteType);

while (siteType === "" || (isNaN(siteType)) || siteType <1 || siteType >3){
	siteType = prompt("Please enter a valid number.\nWhat type of site do you require?\n1) Static\n2) Dynamic\n3) Template based");
}

if (siteType === "1"){
	siteType = 50;
} else if (siteType === "2"){
	siteType = 100;
} else {
	siteType = 75;
}

var webPages = prompt("How many pages does you site require?");
console.log(webPages);
webPagesCost = Number(webPages) * Number(siteType);
console.log(webPagesCost);

myArray[0] = webPagesCost;

var emailAcc = prompt("How many email accounts are required?");
while (emailAcc === "" || (isNaN(emailAcc))){
	emailAcc = prompt("You must enter a valid number.\nHow many email accounts do you require?");
}

emailAccTotal = emailAcc * EMAILCOST;
console.log(emailAccTotal);

myArray[1] = emailAccTotal;

var custContent = prompt("Will you be supplying the content?");
//If yes proceed if else prompt additional
console.log(custContent);
//convert to all lower case
custContent = custContent.toLowerCase();
console.log(custContent);
while (custContent === "" || (!isNaN(custContent)) || custContent != "yes" && custContent != "no") {
	custContent = prompt("Please enter yes or no. Will you be supplying content for the website?");
}

(custContent === "yes") ? alert("Great, that will save us some time and you some money!") : alert("That's gonna add to the cost of the project."); custContentTotal = 200 * webPages ;

myArray[2] = custContentTotal;


console.log(myArray);

var cost = costEst(myArray[0], myArray[1], myArray[2]);
console.log(cost);

function costEst(a, b, c){
	var cost = a + b + c;
	return cost;
}

costEst(myArray[0], myArray[1], myArray[2]);

console.log(cost);


alert("The estimate to create " + compName + "'s site would be $" + cost + ". Feel free to check out the competition. We have the lowest prices around.");


