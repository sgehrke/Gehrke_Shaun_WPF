/*
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
	var boyNameType = prompt("Looks like there will be some ruckus in your future!\nWhat type of name do you prefer?\n1) Common\n2) Extravagant");
		while (boyNameType === "" || (isNaN(boyNameType)) || boyNameType <1 || boyNameType >2) {
			boyNameType = prompt("You need to enter a number.\nWhat type of name do you prefer?\n1) Common\n2) Extravagant ");
		}
	
} else if (gender === "girl") {
	var girlNameType = prompt("Looks like you will be hosting some tea parties in your future!\nWhat type of name would you prefer for your little princess?\n1) Common\n2) Extravagent");
		while (girlNameType === "" || (isNaN(girlNameType)) || girlNameType <1 || girlNameType >2) {
			girlNameType = prompt("You need to enter a number.\nWhat type of name do you prefer?\n1) Common\n2) Extravagant ");			
		}
}
*/

var randomNameNum = numgen();

function numgen() {
	var randomNum = Math.floor((Math.random() * 8) + 1);
console.log(randomNum)	
	return;
}



/*
var extBoyName = extBoyNameArray(Liam, Emmett, Cabe, Mackson, Adalius, Grey, Lachlan, Rush);
var extGirlName = extGirlNameArray(Betson, Neri, Kyra, Isabelline, Legacy, Tempe, Camber, Atticus);
var commonBoyName = commonBoyNameArray(Bruce, Dennis, Harry, Jesse, Ken, Kurt, Luke, Roy);
var commonGirlName = commonGirlNameArray(Anna, Bridget, Elenor, Faith, Jane, Lucy, Rose, Stella);

*/


