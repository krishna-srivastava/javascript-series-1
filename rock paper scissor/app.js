let userScore=0;
let compScore=0;
 
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg-box");
const userscr=document.querySelector("#user-score")
const compscr=document.querySelector("#comp-score")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
playGame(userchoice);
    });
});


function genCompChoice() {
    const arr = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return arr[random];
}


const playGame=(userchoice)=>{
console.log("userchoice=",userchoice);
const compchoice = genCompChoice();
console.log("compchoice=",compchoice);

if(userchoice===compchoice){
drawgame();
}else{
    let userwin=true;
    if(userchoice === "rock"){
        userwin=compchoice === "paper" ? false:true;
    }else if(userchoice==="paper"){
        userwin=compchoice==="scissor" ? false:true;
}else{
  userwin=compchoice==="rock"? false:true;
}
showwinner(userwin,userchoice,compchoice);
}
};


const drawgame=()=>{
    msg.innerText="Game Was Draw, play again"
    msg.style.backgroundColor= "#060824"
}

const showwinner=(userwin,userchoice,compchoice)=>{
if(userwin){
    userScore++;
    userscr.innerText=userScore;
    msg.innerText=`You win, Your ${userchoice} beats ${compchoice}`;
     msg.style.backgroundColor= "green"
}else{
    compScore++;
    compscr.innerText=compScore;
    msg.innerText=`You lose, ${compchoice} beats your ${userchoice}`
     msg.style.backgroundColor= "red"
}
}
