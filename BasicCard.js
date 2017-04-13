var inquirer = require ("inquirer");
var fs = require ("fs");
//start with [] array
var startArray = [];

function BCard(front, back){
	this.front = front;
	this.back = back;
};

//push... checks input

startArray.push(
		
	new BCard("What are mud systems are ran in the production interval?", "RDF"), 
	new BCard("What product is used to weigh up OBM and WBM systems?", "Barite"),
	new BCard(".... is a deadly colorless gas found on some drilling locations.", "H2S")
	);
	startArray


// card count needs to start at 0
var cardCount = 0;

var askQuestion = function(){
	//start recursion loop
	if (cardCount < startArray.length){

		inquirer.prompt([
		{
			//displays the question of the card
			name:"question",
			message: startArray[cardCount].front
		}
		//answers
		]).then(function(answers){
			var useranswer = answers.question;
			var flashcardBack = startArray[cardCount].back;
			//if answer is correct
			if (useranswer.toLowerCase() === flashcardBack){
				console.log(useranswer.toLowerCase() + " is spot on!");
				cardCount++;
				askQuestion();
			// if answer is incorrect
			}else{
				console.log(startArray[cardCount].back + " was not the right answer, study some more");
				cardCount++;
				// continues recursion
				askQuestion();	
			}
				
		});
	}
};
askQuestion();
