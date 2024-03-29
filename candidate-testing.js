const input = require('readline-sync');

// Variables
let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let dashLine = "---------------------------------------------------------------\n"
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];

// Request Name Input
const askForName = () => candidateName = input.question("Please Enter Name: ");

// Ask questions to user
function askQuestions() {
  for (i in questions) {
    candidateAnswers[i] = input.question(questions[i])
    console.log("\n")
  }
}

// Grade user answers
function gradeQuiz(candidateAnswers) {
  let grade = 0;
  for (i in questions) {
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
      grade += 20;
    }
  }
  return grade;
}

function runProgram() {

  askForName();
  console.log(`\n${dashLine}`)
  console.log(`Greetings ${candidateName}! Here is a short quiz!\n`);
  console.log(dashLine)

  askQuestions();
  console.log(dashLine)
  console.log(`Candidate Name: ${candidateName}`)

  let qNum = 1

  for (i in questions) {
    console.log(`\n${qNum}) ${questions[i]}`)
    console.log(`Your Answer: ${candidateAnswers[i]}`)
    console.log(`Correct Answer: ${correctAnswers[i]}`)
    qNum += 1
  }
  
  let grade = gradeQuiz(this.candidateAnswers);
  let status = "FAILED";

  if (grade >= 80) status = "PASSED"

  console.log(`\n>>> Overall Grade: ${grade}% (${grade / 20} of ${questions.length} responses correct) <<<`)
  console.log(`>>> STATUS: ${status} <<<`)
  console.log(`\n${dashLine}`)

}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};