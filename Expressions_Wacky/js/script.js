//Shaun Gehrke, 01-16-14, Expressions_Wacky
alert("Who wants to retire a Millionaire!\nThis calculator will let you know when that's going to happen!");//This is the intro statement
var retireAge = prompt("Let's start with what age you would like to retire?");//this will gather their ideal retirment age
console.log(retireAge);//Prints to the console the prompt response
var yearBorn = prompt(retireAge + ", That's a great goal!\nNow, let's see how realistic it is.\nWhat year where you born?");//Prompts the user to share their birth year
var age = 2014 - yearBorn;//calculates their age
console.log(age);//prints their age to the console
var moneyWeek = prompt("How much money do you plan on putting aside per week for your million dollar retirement fund?");
var moneyYear = moneyWeek * 4 * 12;
console.log(moneyYear);


