//Shaun Gehrke, 01-29-14, Functions_Personal
//This generator will randomly suggest baby names
alert("So, your having trouble coming up with names for your new baby!\nThis name generator is here help with some suggestions!");
var gender = prompt("Are you having a boy or a girl?");
gender = gender.toLowerCase();
console.log(gender);

while (gender === "" || (!isNaN(gender)) || gender != "boy" && gender != "girl"){
	gender = prompt("Please enter either BOY or GIRL into the prompt box!");
	gender = gender.toLowerCase();
}

console.log(gender);


var extBoyName = extBoyNameArray(Liam, Emmett, Cabe, Mackson, Adalius, Grey, Lachlan, Rush);
var extGirlName = extGirlNameArray(Betson, Neri, Kyra, Isabelline, Legacy, Tempe, Camber, Atticus);
var commonBoyName = commonBoyNameArray(Bruce, Dennis, Harry, Jesse, Ken, Kurt, Luke, Roy);
var commonGirlName = commonGirlNameArray(Anna, Bridget, Elenor, Faith, Jane, Lucy, Rose, Stella);