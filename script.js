let qstn1 = {
  question: 'what?',
  answer: 'C',
  correctAnswer: 'C'
}

let qstn2 = {
  question: 'when?',
  answer: 'B',
  correctAnswer: 'A'
}

let qstn3 = {
  question: 'where?',
  answer: 'C',
  correctAnswer: 'C'
}

let qstn4 = {
  question: 'why?',
  answer: 'A',
  correctAnswer: 'B'
}


let qstns = [qstn1, qstn2, qstn3, qstn4];

/* let answrs = qstns.filter((item) => item.correctAnswer.includes('C')); */

qstns.forEach(function(item) {
	if (item.correctAnswer === item.answer) {
  	console.log(`Congratulation! Your answer is correct: ${item.answer}`);
  } else if (item.correctAnswer != item.answer) {
  	console.log(`Sorry, but your answer is incorrect! The correct answer is: ${item.correctAnswer}`);
  }
})