const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice"));
const scoreText=document.getElementById("score");
let currentQuestion={};
let accept=false;
let score=0;
let questioncounter=0;
let avq=[];
let questions=[
    {
        question:"How much do I love you?",
        choice1:"<Sob cheye beshi>",
        choice2:"<Onek>",
        choice3:"<prochur>",
        choice4:"<Too much>",
        answer:1
    },
    {
        question:"Amar favourite food ki?",
        choice1:"<MOMO>",
        choice2:"<DUDU>",
        choice3:"<Tumi>",
        choice4:"<Chicken>",
        answer:2
    },
    {
        question:"Amar kota hami chai",
        choice1:"<1 Koti>",
        choice2:"<Onek>",
        choice3:"<unlimited>",
        choice4:"<Prochur>",
        answer:3
    },
    {
        question:"Amar kache kobe asba?",
        choice1:"<Joldi>",
        choice2:"<Taratari>",
        choice3:"<Jani na>",
        choice4:"<Deri ache'_'>",
        answer:4
    },
];

const CORRECT_ANS=10;
const MAX_QUESTION=questions.length;

startGame=()=>{
    questioncounter=0;
    score=0;
    avq=[...questions];
    getNewQuestion();
};

getNewQuestion=()=>{
    questioncounter++;
    const questionIndex=Math.floor(Math.random()*avq.length);
    currentQuestion=avq[questionIndex];
    question.innerText=currentQuestion.question;

    choices.forEach(choice=>{
        const number=choice.dataset["number"];
        choice.innerText=currentQuestion["choice"+number];
    });

    avq.splice(questionIndex,1);
    accept=true;
};
choices.forEach(choice=>{
    choice.addEventListener("click",e=>{
        if(!accept) return;

        accept=true;
        const seletChoice=e.target;
        const selectedAnswer=seletChoice.dataset["number"];

        const answercheck=selectedAnswer==currentQuestion.answer?"correct":"incorrect";

        if(answercheck=="correct"){
            incrementScore(CORRECT_ANS)
        }
        seletChoice.parentElement.classList.add(answercheck);
        setTimeout(()=>{
            seletChoice.parentElement.classList.remove(answercheck);
            getNewQuestion();
        },2000);        
    });
});
incrementScore=num=>{
    score+=num;
    scoreText.innerText=score;

};

startGame();