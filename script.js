const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


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
    question: 'What was the Name of the Lion in Narnia?',
    answers: [
        { text: 'Alan', correct: false},
        { text: 'Allen', correct: false},
        { text: 'Alorn', correct: false},
        { text: 'Aslan', correct: true}
    ]
},
{
    question: 'What was the name of Rons letter he had Received from his Mother?',
    answers: [
        { text: 'Owl letter', correct: false},
        { text: 'Hewling', correct: false},
        { text: 'Howler', correct: true},
        { text: 'Howling', correct: false}
    ]
},
]