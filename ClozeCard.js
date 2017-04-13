//package we are requiring to use
var inquirer = require("inquirer");
//cloze array needs to be a closed []
var clozeArray = [];
// start at zero
var count = 0;


// function for the card - including the question and answer
function ClozeCard(text, cloze) {
	// text = question, cloze = answer
    this.text = text;
    this.cloze = cloze;
    // replace '...' with cloze/answer
    this.partialText = this.text.replace(this.cloze, '...');

};
//pushes each indiviual made card to array
clozeArray.push(
    new ClozeCard("... are mud systems are ran in the production interval", "RDF"),
    new ClozeCard("... is used to weigh up WBM and OBM", "Barite"),
    new ClozeCard("A deadly colorless gas found on some locations is ...", "H2S")

);


//how the questions will be displayed
var questions = function() {

    if (count < clozeArray.length) {
    	//Asking the question
        inquirer.prompt([{
            name: "question",
            message: clozeArray[count].partialText

        }]).then(function(answers) {
            var useranswer = answers.question;
            var flashcardCloze = clozeArray[count].cloze;
            // if answer is correct
            if (useranswer.toLowerCase() === flashcardCloze.toLowerCase()) {
                console.log("Correct! " + clozeArray[count].text);
                count++;
                questions();
            // if answer is incorrect
            } else {
                console.log("You're wrong! " + clozeArray[count].text);
                count++;
                // continues the loops
                questions();
            }

        });
    }
};
//run the function
questions();
