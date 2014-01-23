//Shaun Gehrke, 01-22-14, Conditionals_Personal
//The Beats calculator
//This calculator will assume the average bpm of te genre of music your spinning, to estimate the number musical beats your brain listens to a day.
var bpmArray = [120 , 140, 70, 160, 90];//This array includes the genres bpm
var genre = prompt("So what's on the platter today?\nLayman's terms:\nWhat genre of music will you be spinning today?\n1) House\n2) Trance\n3) Dubstep\n4) Drum-n-Bass\n5) Hip-Hop");//This will prompt the user for the type of music they are using
genre = parseInt(genre);//This make their responce into a number
while ((genre === "") || (isNaN(genre)) || (genre <1 || genre >5)) {
	genre = prompt("You need to enter the number that corrisponds with your genre.\nWhat genre of music will you be spinning today?\n1) House\n2) Trance\n3) Dubstep\n4) Drum-n-Bass\n5) Hip-Hop");//This is a failsafe for if the user doesn't enter a valid number or leaves the prompt blank
}
genre = parseInt(genre);//This will turn the string into a number if they entered invalid info


var hoursPlayed = prompt("How many hours did you spin for?");//Prompts the user as to how many hours they will perform

if (genre >0 || genre <6){//This if statement will only run if the condition inside the parethesis is true
	switch (genre){
		case 1: 
			genre = bpmArray[0]//If the user answers 1 to the genre question the variable is directed to the information inside this array
			break;
		case 2: 
			genre = bpmArray[1]//If the user answers 2 to the genre question the variable is directed to the information inside this array
			break;
		case 3: 
			genre = bpmArray[2]//If the user answers 3 to the genre question the variable is directed to the information inside this array
			break;
		case 4: 
			genre = bpmArray[3]//If the user answers 4 to the genre question the variable is directed to the information inside this array
			break;
		case 5: 
			genre = bpmArray[4]//If the user answers 5 to the genre question the variable is directed to the information inside this array
			break;		
	}
}
console.log(genre);//Prints the new value for genre to the console



var beatsPerHour = (genre * 60);//This line will calculate the beats per hour
var bpmToday = (hoursPlayed * beatsPerHour);//this line will calculate the beats per day

(bpmToday < 15000) ? alert("You are well on your way to becoming a local club DJ. Your spinning " + bpmToday + " beats per day, and that is right where you need to be to practice and still enjoy it!") : alert("You are a needle junkie! You are spinning " + bpmToday + " beats per day. At this rate you will burn yourself out and live a sheltered life. Find a balance soon before it is to late!");
console.log(bpmToday + " beats per day!");//This is a ternary statement that condenses an if else statement

