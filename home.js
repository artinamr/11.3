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







// js for the homepage, basics from the scrimba js course
// https://scrimba.com/learn/learnjavascript

// first visit? examinaSeen only gets saved once onboarding.html has opened
// so if its empty, send them there. location.href from W3schools:
// https://www.w3schools.com/jsref/prop_loc_href.asp
if (localStorage.getItem("examinaSeen") == null) {
    window.location.href = "onboarding.html";
}

// grabs the saved name (null if they never typed one). localStorage keeps it
// even after the tab is closed, W3schools:
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
// its savedName and not name because the browser already uses name
var savedName = localStorage.getItem("examinaName");

// only change teh heading if there is a name or  else it stays "Welcome!"
// textContent not innerHTML so a typed <b> can't turn into html (e.g they did <strong> and it became bold!)
// https://www.w3schools.com/jsref/prop_node_textcontent.asp
if (savedName != null) {
    document.getElementById("greeting").textContent = "Hello, " + savedName + "!";
    // shows the "Not you?" link, its hidden in index.html until now
    // https://www.w3schools.com/tags/att_global_hidden.asp
    document.getElementById("changeName").hidden = false;
}
