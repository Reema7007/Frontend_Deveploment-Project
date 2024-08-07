
const questions=[
	{
		question: "which is largest animal in the world?",
		answers:[
				{text: "shark", correct: false},
				{text: "Blue Whale", correct: true},
				{text: "Elephant", correct: false},
				{text: "Giraffe", correct: false},
		]
	},
	{
		question: "Name the tallest building in the world.?",
		answers:[
				{text: "Burj Khalifa, UAE", correct: true},
				{text: "Shanghai Tower", correct: false},
				{text: "Qutub Minar", correct: false},
				{text: "Leaning Tower of Pisa", correct: false},
		]	
	},
	{
		question: "Which is the highest mountain peak in the world?",
		answers:[
				{text: "K2", correct: false},
				{text: "Mount Everest", correct: true},
				{text: "Alps", correct: false},
				{text: "Mount Kilimanjaro", correct: false},
		]
	},
	{
		question: "Name the longest river in the world.?",
		answers:[
				{text: "Ganga", correct: false},
				{text: "Nile", correct: true},
				{text: "Amazon", correct: false},
				{text: "Mississippi", correct: false},
		]	
	},
	{
		question: "Which is the biggest and deepest ocean in the world?",
		answers:[
				{text: "Pacific Ocean", correct: true},
				{text: "Indian Ocean", correct: false},
				{text: "Atlantic Ocean", correct: false},
				{text: "Arctic Ocean", correct: false},
		]
	},
	{
		question: "Which is the smallest continent in the world?",
		answers:[
				{text: "Asia", correct: false},
				{text: "Africa", correct: false},
				{text: "Europe", correct: false},
				{text: "Australia", correct: true},
		]
	}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score= 0;

function startQuiz(){
	currentQuestionIndex = 0;
	score =0 ;
	nextButton.innerHTML = "Next";
	showQuestion();
}
function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex +1;
	questionElement.innerHTML = questionNo + "." + currentQuestion.question;
	
	currentQuestion.answers.forEach(answer =>{
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

function resetState(){
	nextButton.style.display= "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

// After answer  is selected

function selectAnswer(e){
	const selectedBtn = e.target;
	const isCorrect= selectedBtn.dataset.correct === "true";
	if(isCorrect){
		selectedBtn.classList.add("correct");
		score++;
	}else{
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerButtons.children).forEach(button =>{
		if(button.dataset.correct === "true"){
			button.classList.add("correct");
		}
		button.disabled= true;
	});
	nextButton.style.display = "block";
}

// To show score
function showScore(){
	resetState();
	questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
	nextButton.innerHTML = "Play Again";
	nextButton.style.display = "block";

}

// To handle Next button 
function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex < questions.length){
		showQuestion();
	}else{
			showScore();
	}
}


nextButton.addEventListener("click", ()=>{
	if(currentQuestionIndex < questions.length){
			handleNextButton();
	}else{
			startQuiz();
	}
});

startQuiz();

