//fetching id here...

const frontpage = document.querySelector('.startbtn')
const startbtn = frontpage.querySelector('button');
const infobox = document.querySelector('.infobox');
const exitbtn = infobox.querySelector('.quit');
const continuebtn = infobox.querySelector('.restart');
const quizpage = document.querySelector('.quizbox');
const resultpage = document.querySelector('.resultbox');
const replay = resultpage.querySelector('.restart');
const quit = resultpage.querySelector('.quit');
const nextques = quizpage.querySelector('.nextbtn');
const timer = document.getElementById('timeleft');
const curr_score = document.getElementById('editscore');





//declaring variables
let score = 0;
let quesno = 0;
let time_left = 15;
let timeout_id = 0;
let timeinterval_id = 0;


//array containing quiz questions
const quizlist = [
    {
        ques: "What does HTML stand for ?",
        ans: "Hyper Text Transfer Protocol",
        opt1: "Hyper Text Machine Language",
        opt2: "Hyper Text Transfer Protocol",
        opt3: "Hyper Text Multiple Language",
        opt4: "Hyper Tool Markup Language"
    },
    {
        ques: "Which of the following is not a Computer Programming Language",
        ans: "Microsof Word",
        opt1: "Python ",
        opt2: "JavaScript",
        opt3: "Microsof Word",
        opt4: "PHP"
    },
    {
        ques: "Who is the Caption of Indian Cricket Team ?",
        ans: "Virat Kohli",
        opt1: "Rohit Sharma",
        opt2: "Virat Kohli",
        opt3: "Mahendra Singh Dhoni",
        opt4: "Jasprit Bumrah"
    },
    {
        ques: "What is the full form of SQL ?",
        ans: "Structured Query Language",
        opt1: "Structured Query Language",
        opt2: "Structured Question Language",
        opt3: "Social Query Language",
        opt4: "Superior Quality Language"
    },
    {
        ques: "What is the full form of PUBG ?",
        ans: "Player Unknown Battle Ground",
        opt1: "Player Ubuntu Bot Game",
        opt2: "Pro User Bot Game",
        opt3: "Player Unknown Battle Game",
        opt4: "Player Unknown Battle Ground"
    }
];

//set the total score of the quiz
let total_score = quizlist.length * 4;
document.getElementById('totalscore').innerHTML = total_score;

// function called when user clicked on options..

const pressed = (curr_id) => {

    curr_text = document.getElementById(curr_id);

    for (let i = 0; i < optlist.length; i++) {
        if (optlist[i].textContent == curr.ans) {
            optlist[i].setAttribute("style", "color:green");
        }
    }

    //when user clicked the wrong option
    if (curr_text.textContent != curr.ans) {
        curr_text.setAttribute("style", "color:red");
        score -= 1;
    }
    //when user clicked the correct option
    else {
        score += 4;
    }
      
    //disable the options after user clicked any one option
    document.getElementById('1').style.pointerEvents = "none";
    document.getElementById('2').style.pointerEvents = "none";
    document.getElementById('3').style.pointerEvents = "none";
    document.getElementById('4').style.pointerEvents = "none";


}

//On loading the question...
const loadques = () => {

    //displaying the timer on the quiz page
    timer.innerHTML = time_left;           

    //After 15 seconds next question will load
    timeout_id = setTimeout(() => {
        console.log('question called');
        callQues();
    }, 16000);

    let curr_ques_no = document.getElementById('currquesno');
    optlist = quizpage.querySelectorAll('.option');
    curr = quizlist[quesno];
   
    //enable the options on loading the question
    document.getElementById('1').style.pointerEvents = "auto";
    document.getElementById('2').style.pointerEvents = "auto";
    document.getElementById('3').style.pointerEvents = "auto";
    document.getElementById('4').style.pointerEvents = "auto";

    //removing the color of previously clicked options
    for (let i = 0; i < optlist.length; i++) {

        optlist[i].setAttribute("style", "color:white");

    }
     
    //displaying the result page when questions are over..
    if (quesno == quizlist.length) {
        quizpage.classList.remove('show');
        resultpage.classList.add('show');
        console.log('quiz over');
        curr_score.innerHTML = score;
    }

    //otherwise displaying the current question...
    else {
        let curr_ques = quizpage.querySelector('.ques');
        if (quesno == 4)
            nextques.innerHTML = "Submit"

        //displaying the current question
        curr_ques.textContent = curr.ques;

        
        //displaying the options..
        optlist[0].innerHTML = curr.opt1;
        optlist[1].innerHTML = curr.opt2;
        optlist[2].innerHTML = curr.opt3;
        optlist[3].innerHTML = curr.opt4;
    }

    //incrementing the question number
    curr_ques_no.innerHTML = quesno + 1;

    //displaying the time left on the question page
    timeinterval_id = setInterval(() => {
        if (time_left <= 0) {

            clearInterval(time_left = 0);
        }
        timer.innerHTML = time_left;
        time_left -= 1;

    }, 1000);


}

//function called when start button clicked
startbtn.addEventListener('click', () => {
    frontpage.classList.add('hide');
    infobox.classList.add('show');
});
 
//fuction called when exit the game
exitbtn.addEventListener('click', () => {
    infobox.classList.remove('show');
    frontpage.classList.remove('hide');
});

//function called when user continue the game
continuebtn.addEventListener('click', () => {
    console.log('continue button clicked');
    infobox.classList.remove('show');
    quizpage.classList.add('show');
    loadques();
});

//starting the quiz again when user click on replay button
replay.addEventListener('click', () => {
    quesno = 0;
    score = 0;
    clearInterval(timeinterval_id);
    clearTimeout(timeout_id);
    time_left = 15;
    nextques.innerHTML = "Next"
    console.log('replay button clicked');
    resultpage.classList.remove('show');
    quizpage.classList.add('show');
    loadques();

});

//when user quit the game instead of replay
quit.addEventListener('click', () => {
    nextques.innerHTML = "Next"
    quesno = 0;
    score = 0;
    resultpage.classList.remove('show');
    frontpage.classList.remove('hide');

});

//function when next button clicked
nextques.addEventListener('click', callQues = () => {
    clearInterval(timeinterval_id);
    clearTimeout(timeout_id);
    time_left = 15;
    quesno += 1;
    loadques();
});

