const cursor=document.querySelector(".cursor");

let mouseX=0;
let mouseY=0;

let currentX=0;
let currentY=0;

document.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

});

function animateCursor(){

currentX+=(mouseX-currentX)*0.18;
currentY+=(mouseY-currentY)*0.18;

cursor.style.left=currentX+"px";
cursor.style.top=currentY+"px";

requestAnimationFrame(animateCursor);

}

animateCursor();

document.querySelectorAll("a,button,.project-card,.skill-card").forEach(item=>{

item.addEventListener("mouseenter",()=>{

gsap.to(cursor,{
scale:2,
background:"rgba(0,255,255,.15)",
borderColor:"#00ffff",
duration:.3
});

});

item.addEventListener("mouseleave",()=>{

gsap.to(cursor,{
scale:1,
background:"transparent",
borderColor:"#fff",
duration:.3
});

});

});