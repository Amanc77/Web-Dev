document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreText = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");

  const showbtn = document.getElementById("showResult-btn");

  let currentQuestionIndex = 0;
  let score = 0;
  const questions = [
    {
      question: "1. What is the full form of HTTP?",
      choices: [
        "Hyper Transfer Text Protocol",
        "Hyper Text Transmission Protocol",
        "Hyper Text Transfer Protocol",
        "High Tech Transfer Protocol",
      ],
      answer: "Hyper Text Transfer Protocol",
    },
    {
      question: "2. Which JavaScript method is used to find an element by ID?",
      choices: [
        "getElementByClassName()",
        "querySelector()",
        "getElementById()",
        "findElementById()",
      ],
      answer: "getElementById()",
    },
    {
      question: "3. What is the default port for HTTP?",
      choices: ["80", "443", "21", "8080"],
      answer: "80",
    },
    {
      question: "4. Which CSS property is used to make text bold?",
      choices: ["bold", "text-weight", "font-weight", "font-style"],
      answer: "font-weight",
    },
    {
      question: "5. Which of the following is NOT a JavaScript data type?",
      choices: ["String", "Boolean", "Integer", "Undefined"],
      answer: "Integer",
    },
    {
      question: "6. Which HTML tag is used to link an external CSS file?",
      choices: ["<css>", "<style>", "<link>", "<stylesheet>"],
      answer: "<link>",
    },
    {
      question: "7. Which function is used to print something in JavaScript?",
      choices: [
        "console.log()",
        "print()",
        "document.write()",
        "log.console()",
      ],
      answer: "console.log()",
    },
    {
      question: "8. What does API stand for?",
      choices: [
        "Application Programming Interface",
        "Advanced Program Integration",
        "Automated Protocol Interface",
        "Application Process Integration",
      ],
      answer: "Application Programming Interface",
    },
    {
      question: "9. Which JavaScript keyword is used to declare a constant?",
      choices: ["var", "let", "const", "final"],
      answer: "const",
    },
    {
      question:
        "10. Which tag is used to define JavaScript inside an HTML file?",
      choices: ["<script>", "<js>", "<javascript>", "<code>"],
      answer: "<script>",
    },
  ];

  startButton.addEventListener("click", startQuiz);
  function startQuiz() {
    startButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");

    showQuestions();
  }
  function showQuestions() {
    nextButton.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = "";

    questions[currentQuestionIndex].choices.forEach((choice) => {
      let li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        let checkOption = selectAnswer(choice);
        if (checkOption === true) {
          li.style.backgroundColor = "green";
        } else {
          li.style.backgroundColor = "red";
        }
      });
      choicesList.appendChild(li);
    });
  }
  function selectAnswer(choice) {
    const correctAns = questions[currentQuestionIndex].answer;
    nextButton.classList.remove("hidden");
    if (choice === correctAns) {
      score++;
      return true;
    }
    if (currentQuestionIndex >= questions.length - 1) {
      showbtn.classList.remove("hidden");
      nextButton.classList.add("hidden");
      showbtn.addEventListener("click", showResult);
    }
    return false;
  }
  function showResult() {
    questionText.innerHTML = "";
    choicesList.innerHTML = "";
    nextButton.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreText.innerHTML = `${score}/${questions.length}`;
    showbtn.classList.add("hidden");
  }
  nextButton.addEventListener("click", (e) => {
    currentQuestionIndex++;
    showQuestions();
  });

  restartButton.addEventListener("click", (e) => {
    showbtn.classList.add("hidden");
    score = 0;
    currentQuestionIndex = 0;
    startButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");

    showQuestions();
  });
});
