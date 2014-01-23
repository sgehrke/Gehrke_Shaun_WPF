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


var hoursPlayed = prompt("How many hours did you spin for?");

if (genre >0 || genre <6){
	switch (genre){
		case 1: 
			genre = bpmArray[0]
			break;
		case 2: 
			genre = bpmArray[1]
			break;
		case 3: 
			genre = bpmArray[2]
			break;
		case 4: 
			genre = bpmArray[3]
			break;
		case 5: 
			genre = bpmArray[4]
			break;		
	}
}
console.log(genre)



var beatsPerHour = (genre * 60);
var bpmToday = (hoursPlayed * beatsPerHour);

(bpmToday < 15000) ? alert("You are well on your way to becoming a local club DJ. Your spinning " + bpmToday + " beats per day, and that is right where you need to be to practice and still enjoy it!") : alert("You are a needle junkie! You are spinning " + bpmToday + " beats per day. At this rate you will burn yourself out and live a sheltered life. Find a balance soon before it is to late!");
console.log(bpmToday + " beats per day!")

