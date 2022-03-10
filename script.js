const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const endButton = document.getElementById('end-btn')
let hardMode = false 

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestions()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestions()
}

function setNextQuestions() {
    resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    console.log('showQuestion')
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
          button.dataset.correct = answer.correct 
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
  })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}


function selectAnswer (e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(selectedButton, correct)
Array.from(answerButtonsElement.children).forEach(button  => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    hardMode = true
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct-answer')
    } else {
        element.classList.add('wrong-answer')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Who played Harry Potter?',
        answers: [
            { text: 'Daniel Faraday', correct: false},
            { text: 'Daniel Craig', correct: false},
            { text: 'Daniel Radcliffe', correct: true},
            { text: 'Daniel Day-Lewis', correct: false}
        ]
    },
{
    question: 'MOVIE TRIVIA: What was the Name of the Lion in Narnia?',
    answers: [
        { text: 'Alan', correct: false},
        { text: 'Allen', correct: false},
        { text: 'Alorn', correct: false},
        { text: 'Aslan', correct: true}
    ]
},
{
    question: 'MOVIE TRIVIA: What was the name of Rons letter he had Received from his Mother?',
    answers: [
        { text: 'Owl letter', correct: false},
        { text: 'Hewling', correct: false},
        { text: 'Howler', correct: true},
        { text: 'Howling', correct: false}
    ]
},
{
    question: 'MOVIE TRIVIA: Where was Bilbo Baggins from?',
    answers: [
        { text: 'Shenire', correct: false},
        { text: 'Shi`ire', correct: false},
        { text: 'Shire', correct: true},
        { text: 'Sheire', correct: false}
    ]
},
{
    question: 'MOVIE TRIVIA: Where is Captain America from?',
    answers: [
        { text: 'Bronx', correct: false},
        { text: 'Bruno', correct: false},
        { text: 'Brooklyn', correct: true},
        { text: 'Bremen', correct: false}
    ]
},
{
    question: 'MOVIE TRIVIA: Who is Bilbo Baggin`s Nephew?',
    answers: [
        { text: 'Frogo', correct: false},
        { text: 'Frodo', correct: true},
        { text: 'Forge', correct: false},
        { text: 'Fordo', correct: false}
    ]
},
{ 
    question: 'MOVIE TRIVIA: Where did the Clone Wars begin?',
    answers: [
        { text: 'Tatoonie', correct: false},
        { text: 'Geonosis', correct: true},
        { text: 'Naboo', correct: false},
        { text: 'Coruscant', correct: false}
    ]
},
{
    question: 'TV TRIVIA: What paint color is Monica`s door in Friends?',
    answers: [
        { text: 'Red', correct: false},
        { text: 'Purple', correct: true},
        { text: 'Grey', correct: false},
        { text: 'Yellow', correct: false}
    ]
},
{
    question: 'TV TRIVIA: Name of the kid next door in Family Matters?',
    answers: [
        { text: 'Steve Furkel', correct: false},
        { text: 'Steve Jurkel', correct: false},
        { text: 'Steve Murkel', correct: false},
        { text: 'Steve Urkel', correct: true}
    ]
},
{
    question: 'TV TRIVIA: Who did Barney fall in love with in How I Met Your Mother?',
    answers: [
        { text: 'Lilly', correct: false},
        { text: 'Nora', correct: false},
        { text: 'Shannon', correct: false},
        { text: 'Robin', correct: true}
    ]
},
{
    question: 'TV TRIVIA: What was 11`s favorite snack in Stranger Things?',
    answers: [
        { text: 'Pancakes', correct: false},
        { text: 'Ego`s', correct: true},
        { text: 'Waffle Sticks', correct: false},
        { text: 'Egg`s', correct: false}
    ]
    
},
{
    question: 'TV TRIVIA: What was the Paper Company called in The Office?',
    answers: [
        { text: 'Dinder Mufflin', correct: false},
        { text: 'Dunder Mifflin', correct: true},
        { text: 'Dunder Mufflin', correct: false},
        { text: 'Dinder Mifflin', correct: false}
    ]
},
{
    question: 'TV TRIVIA: What is Dexter Morgan`s day job? ',
    answers: [
    { text: 'Blood Spatter Analyst', correct: false},
        { text: 'Forensic Specialist', correct: true},
        { text: '', correct: false},
        { text: '', correct: false}
    ]
},
{
    question: 'TV TRIVIA: In Rick and Morty, What is the number of Rick`s Universe? ',
    answers: [
    { text: 'Droopyville', correct: false},
        { text: 'C-137', correct: true},
        { text: 'B-184', correct: false},
        { text: 'Planet Wasted', correct: false}
    ]
}
]