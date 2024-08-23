let boxes=document.querySelectorAll(".box");
let newbtn=document.querySelector(".new");
let msg=document.querySelector(".msg");
 
let turnX=true;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
if(turnX){
    box.innerText="X";
    turnX=false;
}else{
    box.innerText="O";
    turnX=true;
}
box.disabled=true;

checkwinner();
   });
});

function checkwinner() {
for(let pattern of winpattern){
    let val1=boxes[pattern[0]].innerText
    let val2=boxes[pattern[1]].innerText
    let val3=boxes[pattern[2]].innerText

    if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 === val2 && val2 === val3){
            console.log("winnner is",val1);

            showwinner(val1)
        }
    }
}
}

const showwinner=(winner)=>{
msg.innerText=`winner is ${winner}`
msg.classList.remove("hide")
disables()
}
const disables=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const undisables=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const newgame=()=>{
    turnX=true
    undisables();
    msg.classList.add("hide");
}
newbtn.addEventListener("click",newgame)




