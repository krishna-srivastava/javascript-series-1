const tabbox=document.querySelector(".tab-box");
let isDragging=false;
const dragging=(e)=>{
    if(!isDragging)return;
    tabbox.scrollLeft -= e.movementX;
}
const dragstop=()=>{
    isDragging=false;
}
tabbox.addEventListener("mousemove",dragging)
tabbox.addEventListener("mousedown",()=> isDragging=true);
document.addEventListener("mouseup",dragstop);