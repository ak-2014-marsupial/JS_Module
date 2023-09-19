let offSet = 0;
let sliderLine = document.querySelector(".slider-line");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
const width = 300;
const imgCount=document.getElementsByClassName("img").length;
sliderLine.style.width =width*imgCount+"px";
next.addEventListener("click", function () {
    console.log("next before",offSet,width*(imgCount-2));
    if(offSet >=width*(imgCount-2)){
        // next.style.visibility="hidden";
        next.style.opacity="0.4";
    } else {
        offSet+=width;
        // prev.style.visibility="visible";
        prev.style.opacity="1";
    }
       sliderLine.style.left = -offSet + "px"
    console.log("next after",offSet,width*(imgCount-2));

})
prev.addEventListener("click", function () {
    console.log("prev",offSet);

    if(offSet <=0){
        // prev.style.visibility="hidden";
        prev.style.opacity="0.4"
    } else{
        offSet-=width;
        // next.style.visibility="visible";
        next.style.opacity="1";
    }
    sliderLine.style.left = -offSet + "px"
})
