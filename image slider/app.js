const left=document.querySelector(".left")
const right=document.querySelector(".right")
const slider=document.querySelector(".slider")
const image=document.querySelectorAll(".image")

let slidenumber=1;
const length=image.length


const bottom=document.querySelector(".bottom");

    for(let i=0; i<length; i++){
        const div=document.createElement('div');
        div.className="button"
        bottom.appendChild(div);
    }

    const button=document.querySelectorAll(".button");
    button[0].style.backgroundColor="white";

    const resetbg=()=>{
        button.forEach((button)=>{
            button.style.backgroundColor="transparent"
        })
    }

    button.forEach((button,i)=>{
        button.addEventListener("click",()=>{
            resetbg();
            slider.style.transform=`translateX(-${i*800}px)`
            slidenumber=i+1
            button.style.backgroundColor="white"
        });
    });
const changecolor=()=>{
    resetbg();
    button[slidenumber-1].style.backgroundColor="white"
};



const nextslide=()=>{
    slider.style.transform=`translateX(-${slidenumber*800}px)`
    slidenumber++
}
const getfirstlide=()=>{
    slider.style.transform=`translateX(0px)`
    slidenumber=1
}
right.addEventListener("click",()=>{
 slidenumber<length? nextslide(): getfirstlide();
 changecolor()
})

const prevslide=()=>{
    slider.style.transform=`translateX(-${(slidenumber-2)*800}px)`
    slidenumber--
}
const getlastslide=()=>{
    slider.style.transform=`translateX(-${(length-1)*800}px)`
    slidenumber=length
}
left.addEventListener("click",()=>{
    slidenumber>1?prevslide():getlastslide();
    changecolor()
})


let slideInterval;

const start=()=>{
     slideInterval=setInterval(()=>{
        slidenumber<length? nextslide(): getfirstlide();
        changecolor();
     },2500)
}
const stop=()=>{
    clearInterval(slideInterval);
}
start()
slider.addEventListener("mouseover",stop)
slider.addEventListener("mouseout",start)