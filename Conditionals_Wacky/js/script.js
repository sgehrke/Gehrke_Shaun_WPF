//Shaun Gehrke, 01-23-14, Conditionals_Wacky
//This calculator will run a total for your favorite value meal delivered
alert
alert("Have you ever wanted your favorite McDonald's Breakfast meal but were just to lazy to get out of bed?\nWell, now you have an option for delivery (for a small fee.)");

var mealNum = prompt("Welcome to your online order form for your breakfast delivery.\nWhich breakfast meal would you like for your breaksfast in bed?\n1) Egg McMuffin\n2) Sausage McMuffin with Egg\n3) Bacon, Egg & Cheese Biscuit\n4) Sausage Biscuit with Egg\n5) Bacon Egg & Cheese Mcgriddle\n6) Saugage, Egg & Cheese McGriddle\n7) Sausage McGriddle\n8) Sausage Burrito (2)");

var mealNumArray = [3.99, 3.99, 4.19, 3.89, 4.39, 4.39, 3.89, 3.79, ]



mealNum = parseInt(mealNum);
switch (mealNum) {
	case 1: 
		mealNum = mealNumArray[0];//Egg McMuffin
	case 2: 
		mealNum = mealNumArray[1];//Sausage McMuffin with Egg
	case 3: 
		mealNum = mealNumArray[2];//Bacon, Egg & Cheese Biscuit
	case 4: 
		mealNum = mealNumArray[3];//Sausage Biscuit with Egg
	case 5: 
		mealNum = mealNumArray[4];//Bacon Egg & Cheese Mcgriddle
	case 6: 
		mealNum = mealNumArray[5];//Saugage, Egg & Cheese McGriddle
	case 7: 
		mealNum = mealNumArray[6];//Sausage McGriddle
	case 8: 
		mealNum = mealNumArray[7];//Sausage Burrito (2)
}
console.log(mealNum);

