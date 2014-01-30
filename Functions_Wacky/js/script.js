//Shaun Gehrke, 01-30-14, Functions_Wacky
//This will calculate how many goats it would take to mow your lawn for you
alert("Ever get sick of spending countless hours cutting your lawn?\nEvery wish there was an easier way?\nWhy not let goats take care of it!");

var lawnSize =  prompt("First, we will need to know how big your yard is.\nSo, How many square feet is the lawn you want mowed?");
	while (lawnSize === "" || (isNaN(lawnSize))){
	lawnSize = prompt("You have entered an invalid response.\nHow many square feet is your lawn?");
	}
var timeNeeded = prompt("Now, how many hours will you give the goats to mow down your yummy grass?");
	while (timeNeeded === "" || (isNaN(timeNeeded))){
	timeNeeded = prompt("That is not a valid entry.\nHow many hours will you give the goats to finish the job?");
	}
if (timeNeeded <= 2) {
	timeNeeded = prompt("Wow! Remember these are goats eating your lawn.\nAt that rate you would be responsible for more dead goats than days of the year!\nCan you please enter a higher number of hours for the goats sake! ");
		
}


function lawnGoats(yardSize, hours){
	var goatsEatPerSqFt = 10;
	var feetPerHour = yardSize / hours
	var goats = feetPerHour / goatsEatPerSqFt;
	return goats;
}

var goats = lawnGoats(lawnSize, timeNeeded);
var goats = parseInt(goats);
console.log(goats);



if (goats <1){
	goats = 1;
	alert("You either have the worlds smallest lawn, or are giving the goat to much time. Either way " + goats + " goat will do the job!");
} else {
	alert("Well, get out your pocket book cause in order to get your lawn cut in " + timeNeeded + " hour(s), you will need to buy " + goats + " goat(s)!");	
}
