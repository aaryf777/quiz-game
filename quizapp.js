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
        ans: "Hyper Text Markup Language",
        opt1: "Hyper Text Markup Language",
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
    },
    {
        ques: "What is the full form of OOP ?",
        ans: "Object Oriented Programming",
        opt1: "One Object Program",
        opt2: "Object Operating Program",
        opt3: "Object Oracle Program",
        opt4: "Object Oriented Programming"
    },
    {
        ques: "Evaluate the expression 4/(2*4-6)/2 ?",
        ans: "4",
        opt1: "2",
        opt2: "3",
        opt3: "1",
        opt4: "4"
    },
    {
        ques: "Which of the following is used in Back-end programming ?",
        ans: "Both 1 and 3",
        opt1: "C#",
        opt2: "Bootstrap",
        opt3: "Java",
        opt4: "Both 1 and 3"
    }, 
    {
        ques: "Which of the following is an alternative of React.js ?",
        ans: "Vue",
        opt1: "JavaScript",
        opt2: "Ruby",
        opt3: "Vue",
        opt4: "Go"
    },
    {
        ques: "Which of the following is not a Sports Brand ?",
        ans: "Jack & Jones",
        opt1: "Jack & Jones",
        opt2: "Spartan",
        opt3: "Puma",
        opt4: "Reebok"
    },
    {
        ques: "What is the full form of IIT?",
        ans: "Indian Institute Of Technology",
        opt1: "International Institute Of Technology",
        opt2: "Indian Institute Of Technology",
        opt3: "Indian Information Of Technology",
        opt4: "International Information Of Technology"
    },
    {
        ques: "Who won the FIFA 2014 ?",
        ans: "Germany",
        opt1: "Spain",
        opt2: "Germany",
        opt3: "England",
        opt4: "Portugal"
    },
    {
        ques: "Which Football player holds the record of most number of international goals ?",
        ans: "Ali Daei",
        opt1: "Christiano Ronaldo",
        opt2: "Ali Daei",
        opt3: "Sunil Chhetri",
        opt4: "Lionel Messi"
    },
    {
        ques: "Which club won the most number of La liga title?",
        ans: "Real Madrid",
        opt1: "Levante",
        opt2: "Real Madrid",
        opt3: "FC Barcelona",
        opt4: "Valencia"
    },
    {
        ques: "Which team won the most number of IPL title?",
        ans: "Mumbai Indians",
        opt1: "Kolkata Knight Riders",
        opt2: "Chennai Super Kings",
        opt3: "Royal Challengers Banglore",
        opt4: "Mumbai Indians"
    },
    {
        ques: "MS Word is an Example of",
        ans: "Application Software",
        opt1: "Operating System",
        opt2: "Programming Language",
        opt3: "Input Device",
        opt4: "Application Software"
    },
    {
        ques: "Which club won the most number of La liga title?",
        ans: "Real Madrid",
        opt1: "Levante",
        opt2: "Real Madrid",
        opt3: "FC Barcelona",
        opt4: "Valencia"
    },
    {
        ques: "What is the full form of PDF ?",
        ans : "Portable Document Format",
        opt1 : "Portable Document Format",
        opt2 : "Portable Document Folder",
        opt3 : "Portable Document File",
        opt4 : "Portable Document FireBase"
    },
    {
        ques: "What is the full form of PDF ?",
        ans : "Portable Document Folder",
        opt1 : "Portable Document Format",
        opt2 : "Portable Document Folder",
        opt3 : "Portable Document File",
        opt4 : "Portable Document FireBase"
    },
    {
        ques: "Diamond is made up of which element ?",
        ans : "Carbon",
        opt1 : "Potassium",
        opt2 : "Phosphorus",
        opt3 : "Carbon",
        opt4 : "Copper"
    },
    {
        ques: "What is capital of Spain ?",
        ans : "Madrid",
        opt1 : "Barcelona",
        opt2 : "Madrid",
        opt3 : "Galicia",
        opt4 : "Asturias"
    },
    {
        ques: "A ______ is a software program used to view web pages?",
        ans : "Browser",
        opt1 : "Link",
        opt2 : "Domain",
        opt3 : "Browser",
        opt4 : "Host"
    },
    {
        ques: "Which of the following pair is used to measure efficiency of an algorithm ?",
        ans : "Time and Space",
        opt1 : "Data and Space",
        opt2 : "Data and Time",
        opt3 : "Time and Space",
        opt4 : "Time and Memory"
    },
    {
        ques: "Rain Drops acquire spherical shape due to ?",
        ans : "Surface Tension",
        opt1 : "Surface Tension",
        opt2 : "Viscosity",
        opt3 : "Elasticity",
        opt4 : "Friction"
    },
    {
        ques: "Brightness of Bulb depends on ?",
        ans : "Both 1 and 2",
        opt1 : "Voltage",
        opt2 : "Current",
        opt3 : "Both 1 and 2",
        opt4 : "None of these"
    },
    {
        ques: "Optical Fibre works on the principle of ?",
        ans : "Total internal reflection",
        opt1 : "Scattering",
        opt2 : "Interference",
        opt3 : "Total internal reflection",
        opt4 : "Total internal refraction"
    },
    {
        ques: "Rate of change of momentum is called ?",
        ans : "Force",
        opt1 : "Kinetic Energy",
        opt2 : "Force",
        opt3 : "Work Done",
        opt4 : "Potential Energy"
    },
    {
        ques: "WHat is the full form of RAM ?",
        ans : "Random Access Memory",
        opt1 : "Random Applied Memory",
        opt2 : "Random Applicable Memory",
        opt3 : "Random Authorized Memory",
        opt4 : "Random Access Memory"
    },
    {
        ques: "Which of the following sports does not have a 11 player team ?",
        ans : "Baseball",
        opt1 : "Cricket",
        opt2 : "Baseball",
        opt3 : "Hockey",
        opt4 : "Football"
    },
    {
        ques: "What is the 10% of 50% of 200 ?",
        ans : "10",
        opt1 : "10",
        opt2 : "20",
        opt3 : "30",
        opt4 : "50"
    },
    

    

];



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

    //Picking a random question from the quiz list
    let random_ques_no = parseInt(Math.random()*quizlist.length);
    curr = quizlist[random_ques_no];
   
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
    if (quesno == 10) {
        quizpage.classList.remove('show');
        resultpage.classList.add('show');
        console.log('quiz over');
        curr_score.innerHTML = score;
    }

    //otherwise displaying the current question...
    else {
        let curr_ques = quizpage.querySelector('.ques');
        if (quesno == 9)
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

