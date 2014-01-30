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

function numgen(b) {
	var randNum = Math.floor((Math.random() * b.length) + 1);
	var randName="";
	console.log(b);	
	switch (randNum){
		case 1: 
			randName = b[0];
			break;
		case 2: 
			randName = b[1];
			break;	
		case 3: 
			randName = b[2];
			break;	
		case 4: 
			randName = b[3];
			break;	
		case 5: 
			randName = b[4];
			break;	
		case 6: 
			randName = b[5];
			break;	
		case 7: 
			randName = b[6];
			break;	
		case 8: 
			randName = b[7];
			break;
			
	}
	return randName;
	
}


if (genderNum === "boy1"){
	var randomNameNum = numgen(commonBoyName);
	console.log(randomNameNum);
	
} 

if (genderNum === "boy2"){
	var randomNameNum = numgen(extBoyName);
	console.log(randomNameNum);
}
if (genderNum === "girl1"){
	var randomNameNum = numgen(commonGirlName);
	console.log(randomNameNum);
}
if (genderNum === "girl2"){
	var randomNameNum = numgen(extGirlName);
	console.log(randomNameNum);
}

alert(randomNameNum);




