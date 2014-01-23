//Shaun Gehrke, 01-22-14, Conditionals_Industry
//This calculator is specific to the wedding indusrty and allows the user to find out how big of a venue will be needed for the amount of guests invited
//Each table square footage is figured by table size + 60" for proper spacing / 12 inches per foot = feet * itself = square footage
const ROUND48 = 81;//This is the square footage of a 48" table with proper 60" spacing
const ROUND54 = 90;//This is the square footage of a 54" table
const ROUND60 = 100;//This is the square footage of a 60" table
const ROUND72 = 121;//This is the square footage of a 72" table

alert("The following calculator will allow you to find out what size venue will be needed to comfortably fit the guests at your wedding.");

var numGuest = prompt("How many guests will be seated for dinner?");
while ((numGuest === "") || (isNaN(numGuest))) {
	//	console.log("While")Tests the while statement
	numGuest = prompt("You have entered an invalid entry.\nPlease enter how many guests will be seated for dinner");
}	
console.log(numGuest);

var guestPerTable = prompt("How many guests at each table?\nPlease use a value form 4 to 10.");
while ((guestPerTable === "") || (isNaN(guestPerTable))) {
	guestPerTable = prompt("You have entered an invalid entry.\nPlease enter how many guests will be seated at each table.");
}
console.log(guestPerTable);
while (guestPerTable <4 || guestPerTable >10) {
		guestPerTable = prompt("You have entered an invalid entry.\nPlease enter the amount of guests you would like at each table from 4 to 10.");
}
if (guestPerTable >= 4 && guestPerTable <= 5) {
	var tables = numGuest / guestPerTable;
	var roomSize = tables * ROUND48;
	console.log(tables);
	console.log(roomSize);
} else if (guestPerTable >= 6 && guestPerTable <= 7){
	var tables = numGuest / guestPerTable;
	var roomSize = tables * ROUND54;
	console.log(tables);
	console.log(roomSize);
} else if (guestPerTable >= 8 && guestPerTable <= 9) {
	var tables = numGuest / guestPerTable;
	var roomSize = tables * ROUND60;
	console.log(tables);
	console.log(roomSize);
} else if (guestPerTable == 10) {
	var tables = numGuest / guestPerTable;
	var roomSize = tables * ROUND72;
	console.log(tables);
	console.log(roomSize);
} 
var roomSize = Math.round(roomSize);
console.log(roomSize);
alert("For " + numGuest + " guests to be seated for dinner with " + guestPerTable + " guests per table, your venue will need to be " + roomSize + " square feet.");
