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







