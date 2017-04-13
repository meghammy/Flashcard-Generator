var inquirer = require("inquirer");
var clozeArray = [];
var count = 0;

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partialText = this.text.replace(this.cloze, '...');

};

clozeArray.push(
    new ClozeCard("... are mud systems are ran in the production interval", "RDF"),
    new ClozeCard("... is used to weigh up WBM and OBM", "Barite"),
    new ClozeCard("A deadly colorless gas found on some locations is ...", "H2S")

);



var questions = function() {
    if (count < clozeArray.length) {
        inquirer.prompt([{
            name: "question",
            message: clozeArray[count].partialText
        }]).then(function(answers) {
            var useranswer = answers.question;
            var flashcardCloze = clozeArray[count].cloze;

            if (useranswer.toLowerCase() === flashcardCloze.toLowerCase()) {
                console.log("Correct! " + clozeArray[count].text);
                count++;
                questions();
            } else {
                console.log("You're wrong! " + clozeArray[count].text);
                count++;
                questions();
            }

        });
    }
};
questions();
