//The questions to ask the user
var questions = [
    'What is your name?',
    'Where are you from?',
    'What is your age?',
    'What language are you working on?',
    'Nice talking to you!'
];

//counter to keep track of the response
var num = 0;

//save the response
var inputBox = document.querySelector("#ans");

var output = document.querySelector("#result");
output.innerHTML = questions[num];



function showResponse() {
    var input = inputBox.value;
    if (inputBox.value == "") {

    } else {
        if (num == 0) {
            output.innerHTML = `hello ${input}`;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 sec");
            ++num;
            setTimeout(changeQuestion, 2000); //time in ms
        } else if (num == 1) {
            output.innerHTML = `${input} is an awesome place`
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 sec");
            ++num;
            setTimeout(changeQuestion, 2000);
        } else if (num == 2) {
            output.innerHTML = `So you were born in ${2019-input}`
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 sec");
            ++num;
            setTimeout(changeQuestion, 2000);
        } else if (num == 3) {
            output.innerHTML = `${input} is the best`
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 sec");
            ++num;
            setTimeout(changeQuestion, 2000);
        }
    }
}

function changeQuestion() {
    inputBox.setAttribute("placeholder", "Enter your response");
    output.innerHTML = questions[num];
    if (num == 4) {
        inputBox.style.display == "none";
    }
}

document.onkeydown = function(e) {
    console.log(e);
    if (e.which == 13) {
        showResponse();
    }
}