//Shaun Gehrke, 01-22-14, Conditionals_Industry
//This calculator is specific to the wedding indusrty and allows the user to find out how big of a venue will be needed for the amount of guests invited
//Each table square footage is figured by table size + 60" for proper spacing / 12 inches per foot = feet * itself = square footage
const ROUND48 = 81;//This is the square footage of a 48" table with proper 60" spacing
const ROUND54 = 90.25;//This is the square footage of a 54" table
const ROUND60 = 100;//This is the square footage of a 60" table
const ROUND72 = 121;//This is the square footage of a 72" table

alert("The following calculator will allow you to find out what size venue will be needed to comfortably fit the guests at your wedding.");

var numGuest = prompt("How many guests will be seated for dinner?");
while ((numGuest === "") || (isNaN(numGuest))) {
		console.log("While")
		var numGuest = prompt("You have entered an invalid entry.\nPlease enter how many guests will be seated for dinner");
}	

console.log(numGuest);