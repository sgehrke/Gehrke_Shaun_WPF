//Shaun Gehrke, 01-23-14, Conditionals_Wacky
//This calculator will run a total for your favorite value meal delivered
alert
alert("Have you ever wanted your favorite McDonald's Breakfast meal, but were just to lazy to get out of bed?\nWell, now you have an option for delivery (for a small fee of course.)");

var mealNum = prompt("Welcome to your online order form for your breakfast delivery.\nWhich breakfast meal would you like for your breakfast in bed?\n1) Egg McMuffin\n2) Sausage McMuffin with Egg\n3) Bacon, Egg & Cheese Biscuit\n4) Sausage Biscuit with Egg\n5) Bacon Egg & Cheese Mcgriddle\n6) Saugage, Egg & Cheese McGriddle\n7) Sausage McGriddle\n8) Sausage Burrito (2)");

var mealNumArray = [3.99, 3.99, 4.19, 3.89, 4.39, 4.39, 3.89, 3.79, ]

mealNum = parseInt(mealNum);
switch (mealNum) {
	case 1: 
		mealNum = mealNumArray[0];//Egg McMuffin
		break;
	case 2: 
		mealNum = mealNumArray[1];//Sausage McMuffin with Egg
		break;
	case 3: 
		mealNum = mealNumArray[2];//Bacon, Egg & Cheese Biscuit
		break;
	case 4: 
		mealNum = mealNumArray[3];//Sausage Biscuit with Egg
		break;
	case 5: 
		mealNum = mealNumArray[4];//Bacon Egg & Cheese Mcgriddle
		break;
	case 6: 
		mealNum = mealNumArray[5];//Saugage, Egg & Cheese McGriddle
		break;
	case 7: 
		mealNum = mealNumArray[6];//Sausage McGriddle
		break;
	case 8: 
		mealNum = mealNumArray[7];//Sausage Burrito (2)
		break;
}
console.log(mealNum);


var drinkChoice = prompt("What would you like to drink?\n1) Coffee\n2) Orange Juice\n3) Soft drink\n4) Bottle water");

var drinkArray = [1.00, 1.69, 1.29, 1.00];

drinkChoice = parseInt(drinkChoice);
switch (drinkChoice) {
	case 1: 
		drinkChoice = drinkArray[0];//Coffee
		break;
	case 2: 
		drinkChoice = drinkArray[1];//Orange Juice
		break;
	case 3: 
		drinkChoice = drinkArray[2];//Soda
		break;
	case 4: 
		drinkChoice = drinkArray[3];//Water
		break;
}
console.log(drinkChoice);

var foodTotal = mealNum + drinkChoice;
foodTotal = parseFloat(foodTotal);
foodTotal = foodTotal.toFixed(2)
console.log(foodTotal);

alert("Your total is $" + foodTotal)


/*
var delivery = prompt("So now comes the interesting part!!!\nHow much are you willing to pay for the convenience of breakfast delivered to you without having to get out of bed?");
delivery = parseInt(delivery);



if (delivery < 11) {
	delivery = prompt("Ya! Unless you would like to pay a bit more it looks like you will be getting out of bed after all.\nSo how much are you really willing to pay for breakfast in bed?");
} else {
	alert()
}

*/























