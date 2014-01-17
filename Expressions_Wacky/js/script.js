//Shaun Gehrke, 01-16-14, Expressions_Wacky
alert("Who wants to retire a Millionaire!\nThis calculator will let you know when that's going to happen!");//This is the intro statement
var retireAge = prompt("Let's start with what age you would like to retire?");//this will gather their ideal retirment age
console.log(retireAge);//Prints to the console the prompt response
var yearBorn = prompt(retireAge + ", That's a great goal!\nNow, let's see how realistic it is.\nWhat year where you born?");//Prompts the user to share their birth year
var age = 2014 - yearBorn;//calculates their age
console.log(age);//prints their age to the console
var moneyWeek = prompt("How much money do you plan on putting aside per week for your million dollar retirement fund?");//This line prompts the user to see how much money they will be saving
var moneyYear = moneyWeek * 4 * 12;//Calculation for the money per year
console.log(moneyYear);//prints the amount accumulated in a year
var monthsToMillion = 1000000 / moneyYear;//This calculates the moths it will take
console.log(monthsToMillion); //this prints the months it will take to the log
var yearsToMillion = (monthsToMillion)  / 12;//calculates the months to years
var roundYear = Math.round(yearsToMillion);//Rounds to the nearst whole number
console.log(roundYear);//prints to console the rounded year amount 
var goal = yearsToMillion + age - retireAge;//calculates the goal of the user
var roundGoal = Math.round(goal);//rounds the goal to the nearst whole number
console.log(roundGoal);//Prints the goal to the console

if (roundGoal <= 0) {//This statement allows the alert messege to be displayed if it it true
	var roundGoal = Math.abs(roundGoal);//if is true then this var will run
	console.log(roundGoal);// this wil print the round goal
	var goalReachedAge = retireAge - roundGoal;//this calculates the age a person will retire
	console.log(goalReachedAge);//this prints tha age to the console
	alert("Congratulations, you will retire a millionaire at age " + goalReachedAge + ", which is " + roundGoal + " year\(s\) before your goal!"); //This alert is the final messege if you reached yuor goal
} else {//if the user didn't reach their goal this is the start of their path
	var retireGoal = age + yearsToMillion;//This calculates their goal age to retire
	var roundRetireGoal = Math.round(retireGoal);//This rounds their goal
	console.log(roundRetireGoal);//this prints the goal to the console
	alert("That not going to cut it. You won't be able to retire a millionaire until you are " + roundRetireGoal + ", at the rate you are saving.");//This is the alert they will receive because they will not reach their goal
}




