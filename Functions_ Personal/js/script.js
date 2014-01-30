//Shaun Gehrke, 01-29-14, Functions_Personal
//This generator will randomly suggest baby names
alert("So, your having trouble coming up with names for your new baby!\nThis name generator is here to offer you some suggestions!");
var gender = prompt("Are you having a boy or a girl?");
gender = gender.toLowerCase();
console.log(gender);

while (gender === "" || (!isNaN(gender)) || gender != "boy" && gender != "girl"){
	gender = prompt("Please enter either BOY or GIRL into the prompt box!");
	gender = gender.toLowerCase();
}
console.log(gender);

if (gender === "boy"){
	var nameType = prompt("Looks like there will be some ruckus in your future!\nWhat type of name do you prefer?\n1) Common\n2) Extravagant");
		while (nameType === "" || (isNaN(nameType)) || nameType <1 || nameType >2){
		nameType = prompt("You need to enter a number.\nWhat type of name do you prefer?\n1) Common\n2) Extravagant ");
			console.log(nameType);
		}
	
} else if (gender === "girl") {
	var nameType = prompt("Looks like you will be hosting some tea parties in your future!\nWhat type of name would you prefer for your little princess?\n1) Common\n2) Extravagent");
		while (nameType === "" || (isNaN(nameType)) || nameType <1 || nameType >2){
		nameType = prompt("You need to enter a number.\nWhat type of name do you prefer?\n1) Common\n2) Extravagant ");
			console.log(nameType);			
		}
}


var genderNum = gender + nameType;
console.log(genderNum);

var extBoyName = ["Liam", "Emmett", "Cabe", "Mackson", "Adalius", "Grey", "Lachlan", "Rush"];
var extGirlName = ["Betson", "Neri", "Kyra", "Isabelline", "Legacy", "Tempe", "Camber", "Atticus"];
var commonBoyName = ["Bruce", "Dennis", "Harry", "Jesse", "Ken", "Kurt", "Luke", "Roy"];
var commonGirlName = ["Anna", "Bridget", "Elenor", "Faith", "Jane", "Lucy", "Rose", "Stella"];


var randomNameNum = numgen(extBoyName);
console.log(randomNameNum);





