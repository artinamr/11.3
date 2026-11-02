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



// js for the onboarding pagebasics from the scrimba js course
// https://scrimba.com/learn/learnjavascript


// Sets examinaSeen in the localstorage to yes, so the users get flagged as they have been to onboarding "as they have just openede it)
localStorage.setItem("examinaSeen", "yes");

// runs when Let's go is clicked: onclick="saveName()" is on the button
// in onboarding.html. onclick from W3schools:
// https://www.w3schools.com/jsref/event_onclick.asp
function saveName() {
    // fname is the name box, .value is whatever got typed in inn
    var typedName = document.getElementById("fname").value;
    // nameMessage is the empty red <p> under the box
    var message = document.getElementById("nameMessage");

    // condition of not saving the name if nothing is inpiutted into the name box
    //W3schools: https://www.w3schools.com/js/js_if_else.asp + Scrimba
    if (typedName == "") {
        message.textContent = "Please type your name first";
    } else {
        // save the name then redircet theuser into homepage
        localStorage.setItem("examinaName", typedName);
        window.location.href = "index.html";
    }
}
