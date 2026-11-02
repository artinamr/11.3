//
//________________________________________________________
//Hi there, I just wanted to say that any W3School accredited etc.. is when I used it for refrence
// to remember or double check my code, I have learned all of this mainly in Scrimba, and with about 2-3 hours of different JS 
// crashcourses and tips and tricks videos (Sorry for not evidencing it, I forgot to do so when watching them, 
// MS.Chong you might remember the 5-7 lessons I just learned with headphones on
// Thanks for your attention, and thanks for your time :)))))
//_____________________________________________________________
//
//








// JS for the quiz 
// https://scrimba.com/learn/learnjavascript

//function for when check answer is clicked: onclick="checkAnswers()" is on the
// button in quiz.html onclick from W3schools (refrence only, learned in Scrimba):
// https://www.w3schools.com/jsref/event_onclick.asp
function checkAnswers() {
    // score starts at 0 and goes up by 1 for every right answer
    var score = 0;
    // feedback-q1 etc is the blankn <p> under eachQ in quiz.html
    var feedback1 = document.getElementById("feedback-q1");
    var feedback3 = document.getElementById("feedback-q3");
    var feedback4 = document.getElementById("feedback-q4");
    var feedback5 = document.getElementById("feedback-q5");
    var feedback7 = document.getElementById("feedback-q7");

    // question 1, b is right. q1b is the b radio button in quiz.html
    // .checked is the correct answer (true)  if it is selected (ticked) W3schools:
    // https://www.w3schools.com/jsref/prop_radio_checked.asp
    // Order for the Qs to come: right answer, wrong ones
    if (document.getElementById("q1b").checked) {
        feedback1.textContent = "Correct!";
        // style.color changes the text colour, W3schools:
        // https://www.w3schools.com/jsref/prop_style_color.asp
        feedback1.style.color = "green";
        score = score + 1;
    } else if (document.getElementById("q1a").checked) {
        // a ticked so its wrong
        feedback1.textContent = "Not quite. Open the answer below.";
        feedback1.style.color = "darkred";
    } else if (document.getElementById("q1c").checked) {
        // c ticked so its wrong
        feedback1.textContent = "Not quite. Open the answer below.";
        feedback1.style.color = "darkred";
    } else {
        // none of them ticked
        feedback1.textContent = "Pick an answer first";
        feedback1.style.color = "darkred";
    }

    // question 3, b is right (same as q1, just different ids)
    if (document.getElementById("q3b").checked) {
        feedback3.textContent = "Correct!";
        feedback3.style.color = "green";
        score = score + 1;
    } else if (document.getElementById("q3a").checked) {
        feedback3.textContent = "Not quite. Open the answer below.";
        feedback3.style.color = "darkred";
    } else if (document.getElementById("q3c").checked) {
        feedback3.textContent = "Not quite. Open the answer below.";
        feedback3.style.color = "darkred";
    } else {
        feedback3.textContent = "Pick an answer first";
        feedback3.style.color = "darkred";
    }

    // question 4, b is right (same as q1, just different ids)
    if (document.getElementById("q4b").checked) {
        feedback4.textContent = "Correct!";
        feedback4.style.color = "green";
        score = score + 1;
    } else if (document.getElementById("q4a").checked) {
        feedback4.textContent = "Not quite. Open the answer below.";
        feedback4.style.color = "darkred";
    } else if (document.getElementById("q4c").checked) {
        feedback4.textContent = "Not quite. Open the answer below.";
        feedback4.style.color = "darkred";
    } else {
        feedback4.textContent = "Pick an answer first";
        feedback4.style.color = "darkred";
    }

    // question 5, c is right (same as q1, just different ids)
    if (document.getElementById("q5c").checked) {
        feedback5.textContent = "Correct!";
        feedback5.style.color = "green";
        score = score + 1;
    } else if (document.getElementById("q5a").checked) {
        feedback5.textContent = "Not quite. Open the answer below.";
        feedback5.style.color = "darkred";
    } else if (document.getElementById("q5b").checked) {
        feedback5.textContent = "Not quite. Open the answer below.";
        feedback5.style.color = "darkred";
    } else {
        feedback5.textContent = "Pick an answer first";
        feedback5.style.color = "darkred";
    }

    // question 7, a is right (same as q1, just different ids)
    if (document.getElementById("q7a").checked) {
        feedback7.textContent = "Correct!";
        feedback7.style.color = "green";
        score = score + 1;
    } else if (document.getElementById("q7b").checked) {
        feedback7.textContent = "Not quite. Open the answer below.";
        feedback7.style.color = "darkred";
    } else if (document.getElementById("q7c").checked) {
        feedback7.textContent = "Not quite. Open the answer below.";
        feedback7.style.color = "darkred";
    } else {
        feedback7.textContent = "Pick an answer first";
        feedback7.style.color = "darkred";
    }

    // score goes in the <p id="score"> under the buttons
    document.getElementById("score").textContent = "You got " + score + " out of 5";
}

// runs from the Try again button: onclick="resetQuiz()" in quiz.html
// long but easy to follow (I dont know any better way sorry :()
function resetQuiz() {
    // checked = false unticks the radio button
    document.getElementById("q1a").checked = false;
    document.getElementById("q1b").checked = false;
    document.getElementById("q1c").checked = false;
    document.getElementById("q3a").checked = false;
    document.getElementById("q3b").checked = false;
    document.getElementById("q3c").checked = false;
    document.getElementById("q4a").checked = false;
    document.getElementById("q4b").checked = false;
    document.getElementById("q4c").checked = false;
    document.getElementById("q5a").checked = false;
    document.getElementById("q5b").checked = false;
    document.getElementById("q5c").checked = false;
    document.getElementById("q7a").checked = false;
    document.getElementById("q7b").checked = false;
    document.getElementById("q7c").checked = false;
    // wipe the messages and the score
    document.getElementById("feedback-q1").textContent = "";
    document.getElementById("feedback-q3").textContent = "";
    document.getElementById("feedback-q4").textContent = "";
    document.getElementById("feedback-q5").textContent = "";
    document.getElementById("feedback-q7").textContent = "";
    document.getElementById("score").textContent = "";
}
