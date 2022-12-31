currentQuestion;

generateQuestion(questions);

function checkQuestion(){

}

function generateQuestion(questions){
    // hole eine zufällige Frage
    rand = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[rand];
    // Hole mir Knoten
    question = document.getElementById("question");
    image = document.getElementById("image");
    answer1 = document.getElementById("1");
    answer2 = document.getElementById("2");
    answer3 = document.getElementById("3");
    answer4 = document.getElementById("4");
    // Fragedetails, den HTML Elementen zuweisen
    question.innerHTML = currentQuestion.question;
    image.src = currentQuestion.imageURL;
    answer1.innerHTML = currentQuestion.answers[0];
    answer2.innerHTML = currentQuestion.answers[1];
    answer3.innerHTML = currentQuestion.answers[2];
    answer4.innerHTML = currentQuestion.answers[3];
}