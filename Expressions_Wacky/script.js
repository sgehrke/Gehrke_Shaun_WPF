//Shaun Gehrke, 01-15-14
//Expressions_Personal - This Javascipt file will run a calculator to determine the amount of pctures in a pregnancy time lapse.
var monthsPrego = prompt("Congratulations on your pregnancy and welcome to your time lapse journey!\nHow many months along are you?");//Intro statement and start a prompt of questions to be stored in variables
var monthsRemain = 9 - monthsPrego;//This line will calculate the remaining months of the pregnancy and be used later in an expression
var targetPics = prompt("How many pictures are you aiming to take for the entire project?");////This will prompt the user to answer how many pictures they want to end up with
var timesPerWeek = prompt("How many times per week are you taking pictures?");////This will prompt the user to answer how many times per week they will be having a session
var picsPerDay = prompt("How many pictures are you taking per session?");//This will prompt the user to enter how many pics per day they will be taking to be used later in a formula
var picsPerMonth = picsPerDay * timesPerWeek * 4;//This will multiply the entered amount for pictures per day by 4
var totalPics = picsPerMonth * monthsRemain;//This line will multiply the entered amount for picsPerMonth and remaining months
var picsNeeded = targetPics - totalPics;//This line will calculate the amount of pictures needed to achieve goal

if (totalPics >= targetPics) {
		alert("You are well on your way to your goal! If you stick to your plan you will have " + totalPics + " pictures to work with for your time lapse.");
		console.log("You are well on your way to your goal! If you stick to your plan you will have " + totalPics + " pictures to work with for your time lapse.");//If the total amount of pictures is greater than or equal to their goal this will alert and then prompt
} else {
		alert("Looks like you are going to need to take more pictures to achieve your goal! You will only have " + totalPics + " pictures at this pace, which is " + picsNeeded + " short of your goal.");
		console.log("Looks like you are going to need to take more pictures to achieve your goal! You will only have " + totalPics + " pictures at this pace, which is " + picsNeeded + " short of your goal.");//If the total amount of pictures is noy greater than or equal to their goal this will alert and then prompt
}


