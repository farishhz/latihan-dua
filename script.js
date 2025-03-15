const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        correct: 0
    },
    {
        question: "Siapa penemu lampu pijar?",
        options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"],
        correct: 1
    },
    {
        question: "Planet terbesar di tata surya adalah?",
        options: ["Bumi", "Mars", "Jupiter", "Venus"],
        correct: 2
    },
    {
        question: "Bahan utama pembuatan kaca adalah?",
        options: ["Pasir silika", "Plastik", "Kayu", "Logam"],
        correct: 0
    },
    {
        question: "Siapa presiden pertama Indonesia?",
        options: ["Soekarno", "Soeharto", "Habibie", "Megawati"],
        correct: 0
    },
    {
        question: "Hewan tercepat di darat adalah?",
        options: ["Singa", "Macan", "Cheetah", "Kuda"],
        correct: 2
    },
    {
        question: "Zat yang dibutuhkan tumbuhan untuk fotosintesis adalah?",
        options: ["Oksigen", "Karbon dioksida", "Nitrogen", "Hidrogen"],
        correct: 1
    },
    {
        question: "Siapa penulis novel 'Laskar Pelangi'?",
        options: ["Andrea Hirata", "Pramoedya Ananta Toer", "Tere Liye", "Habiburrahman El Shirazy"],
        correct: 0
    },
    {
        question: "Berapakah jumlah pulau di Indonesia (perkiraan)?",
        options: ["13.000", "17.000", "20.000", "10.000"],
        correct: 1
    },
    {
        question: "Bendera nasional Indonesia terdiri dari warna apa?",
        options: ["Merah dan Putih", "Merah dan Hijau", "Putih dan Biru", "Hitam dan Kuning"],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("nextBtn");

   
    feedbackElement.textContent = "";
    feedbackElement.style.color = "";
    nextButton.style.display = "none";

   
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

   
    optionsElement.innerHTML = "";

    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.className = "btn btn-outline-primary option-btn";
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("nextBtn");
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        feedbackElement.textContent = "Jawaban Benar!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Jawaban Salah!";
        feedbackElement.style.color = "red";
    }

    
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0; 
    }
    loadQuestion();
}


window.onload = loadQuestion;
