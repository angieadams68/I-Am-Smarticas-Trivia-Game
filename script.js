const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const endButton = document.getElementById('end-btn')
const message = document.querySelector('#message')

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
    // message.innerText = 'Game Over'
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
     question: 'MOVIE TRIVIA: What was the name of Ron`s letter he had Received from his Mother?',
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
         { text: 'Photographer', correct: false},
         { text: 'Chemist', correct: false}
     ]
 },
 {
     question: 'TV TRIVIA: In Rick and Morty, What is the number of Rick`s Universe?',
     answers: [
     { text: 'Droopyville', correct: false},
         { text: 'C-137', correct: true},
         { text: 'B-184', correct: false},
         { text: 'Planet Wasted', correct: false}
     ]
 },

  {
      question: 'HARD: What is the color of C-3PO`s arm in Star Wars: The Force Awakens?',
      answers: [
         { text: 'Black', correct: false},
         { text: 'Red', correct: true},
         { text: 'Blue', correct: false},
         { text: 'Silver', correct: false}
      ]
  },
  {
      question: 'HARD: During the first five season of South Park, Which character died in nearly every episode?',
      answers: [
         { text: 'Kyle', correct: false},
         { text: 'Kenny', correct: true},
         { text: 'Cartman', correct: false},
         { text: 'Stan', correct: false}
      ]
  },
  {
      question: 'HARD: Who delivers the final blow that destroys the second Death Star?',
      answers: [
         { text: 'Han Solo with an X-Wing', correct: false},
         { text: 'Luke Skywalker with a Speeder', correct: false},
         { text: 'Jar Jar Binks with a Y-Wing', correct: false},
         { text: 'Lando Calrissian with the Millennium Falcon', correct: true}
      ]
  },
  {
      question: 'HARD What is the first spell that was casted by Hermione?',
      answers: [
         { text: 'Lemmius Fixus', correct: false},
         { text: 'Oculus Reparo', correct: true},
         { text: 'Wingardium Leviosa', correct: false},
         { text: 'Salvio Hexia', correct: false}
      ]
  },
  {
      question: 'HARD: What animal does Professor McGonagall transform into in the movie Harry Potter and The Sorcerer`s Stone?',
      answers: [
         { text: 'Bird', correct: false},
         { text: 'Cat', correct: true},
         { text: 'Owl', correct: false},
         { text: 'Lizard', correct: false}
      ]
  },
  {
      question: 'HARD: What was the framed picture behind the Simpson`s couch?',
      answers: [
         { text: 'Family photo', correct: false},
         { text: 'Sailboat', correct: true},
         { text: 'Mountains', correct: false},
         { text: 'Ocean', correct: false}
      ]
  },
  {
      question: 'HARD: Who makes a deal with Agent Smith to sell out Morpheus in The Matrix?',
      answers: [
         { text: 'Agent Brown', correct: false},
         { text: 'Cypher', correct: true},
         { text: 'Mouse', correct: false},
         { text: 'The Oracle', correct: false}
      ]
  },
  {
      question: 'HARD: In Star Trek, What is the name of the ship under Benjamin Sisko`s command?',
      answers: [
         { text: 'Enterprise', correct: false},
         { text: 'Defiant', correct: true},
         { text: 'Voyager', correct: false},
         { text: 'Dominion', correct: false}
      ]
  },
  {
      question: 'HARD: In which US city do the Avengers battle the Chitauri?',
      answers: [
         { text: 'LA', correct: false},
         { text: 'Chicago', correct: false},
         { text: 'NYC', correct: true},
         { text: 'DC', correct: false}
      ]
  }
]

