//Shaun Gehrke, 01-29-14, Functions_Personal
//This generator will randomly suggest baby names
//This first line alerts the user as to what the calculator does
alert("So, your having trouble coming up with names for your new baby!\nThis name generator is here to offer you some suggestions!");
//This will prompt the user and enter their response into the variable gender
var gender = prompt("Are you having a boy or a girl?");
//This with convert their response to all lower case
gender = gender.toLowerCase();
//This will print to the console so I can see their answer
console.log(gender);

//The while statemet ensures that they enter specific values
while (gender === "" || (!isNaN(gender)) || gender != "boy" && gender != "girl"){
	//This will prompt them only if the specific circumstances inside the the while condition are met
	gender = prompt("Please enter either BOY or GIRL into the prompt box!");
	//This will convert their answer to all lower case
	gender = gender.toLowerCase();
}
//This will again print their responce to the console
console.log(gender);
//This will run only if the users response comes back as boy
if (gender === "boy"){
	//This is a what will be prompted if they responded boy
	var nameType = prompt("Looks like there will be some ruckus in your future!\nWhat type of name do you prefer?\n1) Common\n2) Extravagant");
		//This validates they responded with a valid responce
		while (nameType === "" || (isNaN(nameType)) || nameType <1 || nameType >2){
		//This will prompt them if they do not enter a valid response
		nameType = prompt("You need to enter a number.\nWhat type of name do you prefer?\n1) Common\n2) Extravagant ");
			console.log(nameType);
		}
//If their response is girl the following will run	
} else if (gender === "girl") {
	//This is what will prompt the user if they the earlier prompt was girl
	var nameType = prompt("Looks like you will be hosting some tea parties in your future!\nWhat type of name would you prefer for your little princess?\n1) Common\n2) Extravagent");
		//This validates that they entered a vali response
		while (nameType === "" || (isNaN(nameType)) || nameType <1 || nameType >2){
		//This will prompt them if they enter a invalid response
		nameType = prompt("You need to enter a number.\nWhat type of name do you prefer?\n1) Common\n2) Extravagant ");			
		}
}

//This combines the variable gender and nameType to use later to direct them to the right array
var genderNum = gender + nameType;

//This is the extravagant  boy name array
var extBoyName = ["Liam", "Emmett", "Cabe", "Mackson", "Adalius", "Grey", "Lachlan", "Rush"];
//this is th extravagant girl name array
var extGirlName = ["Betson", "Neri", "Kyra", "Isabelline", "Legacy", "Tempe", "Camber", "Atticus"];
//These are the common boy name array 
var commonBoyName = ["Bruce", "Dennis", "Harry", "Jesse", "Ken", "Kurt", "Luke", "Roy"];
//This is the common girl name array
var commonGirlName = ["Anna", "Bridget", "Elenor", "Faith", "Jane", "Lucy", "Rose", "Stella"];


//This declares an anonymous function with b as the perameters
var numgen = function(b) {
	//This generates a random number
	var randNum = Math.floor((Math.random() * b.length) + 1);
	//This makes room for the name to be stored
	var randName="";
	//This will change the result of the ranom number to a value of the index it calls for
	switch (randNum){
		//If the random number is 1
		case 1: 
			randName = b[0];
			break;
		//If the random number is 2	
		case 2: 
			randName = b[1];
			break;	
		//If the random number is 3
		case 3: 
			randName = b[2];
			break;	
		//If the random number is 4
		case 4: 
			randName = b[3];
			break;	
		//If the random number is 5
		case 5: 
			randName = b[4];
			break;	
		//If the random number is 6
		case 6: 
			randName = b[5];
			break;	
		//If the random number is 7
		case 7: 
			randName = b[6];
			break;	
		//If the random number is 8
		case 8: 
			randName = b[7];
			break;
			
	}
	//This return the whatever is calculated to a variable
	return randName;
	
}

//This will run if the combination of gender and namType equal the condition and then it will run the function with the argument of the array needed
if (genderNum === "boy1"){
	var randomNameNum = numgen(commonBoyName);
	console.log(randomNameNum);
	
} 
//This will run if the combination of gender and namType equal the condition and then it will run the function with the argument of the array needed
if (genderNum === "boy2"){
	var randomNameNum = numgen(extBoyName);
	console.log(randomNameNum);
}
//This will run if the combination of gender and namType equal the condition and then it will run the function with the argument of the array needed
if (genderNum === "girl1"){
	var randomNameNum = numgen(commonGirlName);
	console.log(randomNameNum);
}
//This will run if the combination of gender and namType equal the condition and then it will run the function with the argument of the array needed
if (genderNum === "girl2"){
	var randomNameNum = numgen(extGirlName);
	console.log(randomNameNum);
}
//This will alert the user to the nae that was generated by the function
alert("Our suggested name is \"" + randomNameNum + "\". If that name is not to your liking, feel free to refresh the page and generate a new name.");




