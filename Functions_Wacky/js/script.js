//Shaun Gehrke, 01-30-14, Functions_Wacky
//This will calculate how many goats it would take to mow your lawn for you



function lawnGoats(yardSize, hours){
	var goatsEatPerSqFt = 10;
	var feetPerHour = yardSize / hours
	var goats = feetPerHour / goatsEatPerSqFt;
	return goats;
	
}

var goats = lawnGoats(1000, 2);

console.log(goats);