/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});


/* ===========================
   CUSTOM CURSOR
=========================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


document.querySelectorAll(".btn")
.forEach(btn=>{

    btn.addEventListener("mousemove",(e)=>{

        const rect=btn.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;
        const y=e.clientY-rect.top-rect.height/2;

        gsap.to(btn,{
            x:x*0.2,
            y:y*0.2,
            duration:.3
        });

    });

    btn.addEventListener("mouseleave",()=>{

        gsap.to(btn,{
            x:0,
            y:0,
            duration:.5
        });

    });

});


/* ===========================
   STICKY NAVBAR EFFECT
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,0.9)";

        navbar.style.backdropFilter =
            "blur(25px)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,.04)";
    }

});


/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ===========================
   SMOOTH SCROLL
=========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ===========================
   SCROLL REVEAL
=========================== */

ScrollReveal({

    distance: "80px",
    duration: 1500,
    delay: 200,
    reset: false

});


ScrollReveal().reveal(

    ".hero-left",

    {
        origin: "left"
    }

);

ScrollReveal().reveal(

    ".hero-right",

    {
        origin: "right"
    }

);

ScrollReveal().reveal(

    ".section-title",

    {
        origin: "top"
    }

);

ScrollReveal().reveal(

    ".glass-card, .education-card, .contact-card",

    {
        origin: "bottom",
        interval: 150
    }

);

ScrollReveal().reveal(

    ".skill-pill",

    {
        origin: "bottom",
        interval: 80
    }

);

ScrollReveal().reveal(

    ".project-card",

    {
        origin: "bottom",
        interval: 150
    }

);


/* ===========================
   FLOATING GLOW EFFECT
=========================== */

const glow1 =
    document.querySelector(".glow-1");

const glow2 =
    document.querySelector(".glow-2");

document.addEventListener("mousemove", (e) => {

    const x =
        e.clientX / window.innerWidth;

    const y =
        e.clientY / window.innerHeight;

    glow1.style.transform =
        `translate(${x * 50}px, ${y * 50}px)`;

    glow2.style.transform =
        `translate(-${x * 50}px, -${y * 50}px)`;

});


/* ===========================
   SKILL LIGHTNING EFFECT
=========================== */

document
.querySelectorAll(".skill-pill")
.forEach(skill => {

    skill.addEventListener(
        "mouseenter",
        () => {

            skill.innerHTML =
                "⚡ " +
                skill.textContent.replace("⚡ ", "");

        }
    );

});


/* ===========================
   PROJECT HOVER TILT
=========================== */

document
.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            (x / rect.width - 0.5) * 12;

        const rotateX =
            (0.5 - y / rect.height) * 12;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/* ===========================
   MOBILE MENU
=========================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navMenu =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* ===========================
   HERO TEXT ANIMATION
=========================== */

const heroTitle =
    document.querySelector(".hero h1");

heroTitle.animate(

    [
        {
            opacity: 0,
            transform: "translateY(50px)"
        },
        {
            opacity: 1,
            transform: "translateY(0)"
        }
    ],

    {
        duration: 1500,
        easing: "ease-out"
    }

);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-tag",{
    y:50,
    opacity:0,
    duration:1,
    ease:"power4.out"
});

gsap.from(".hero h1",{
    y:100,
    opacity:0,
    duration:1.2,
    delay:.2,
    ease:"power4.out"
});

gsap.from(".hero-description",{
    y:50,
    opacity:0,
    duration:1,
    delay:.5
});

gsap.from(".hero-buttons",{
    y:50,
    opacity:0,
    duration:1,
    delay:.8
});

gsap.from(".profile-card",{
    scale:.8,
    opacity:0,
    duration:1.5,
    delay:.3,
    ease:"power4.out"
});

gsap.utils.toArray(".reveal-text span")
.forEach(text=>{

    gsap.from(text,{
        y:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:text,
            start:"top 85%"
        }
    });

});

gsap.utils.toArray(".project-card")
.forEach(card=>{

    gsap.from(card,{
        y:150,
        opacity:0,
        duration:1.2,

        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        }
    });

});

gsap.to(".glow-1",{

    y:200,

    scrollTrigger:{
        trigger:"body",
        start:"top top",
        end:"bottom bottom",
        scrub:true
    }

});

gsap.to(".glow-2",{

    y:-250,

    scrollTrigger:{
        trigger:"body",
        start:"top top",
        end:"bottom bottom",
        scrub:true
    }

});

gsap.utils.toArray(".section")
.forEach(section=>{

    gsap.from(section,{

        opacity:0,
        y:100,

        duration:1,

        scrollTrigger:{
            trigger:section,
            start:"top 80%"
        }

    });

});

gsap.from(".navbar",{

    y:-100,
    opacity:0,
    duration:1.2,
    ease:"power4.out"

});

window.addEventListener("scroll",()=>{

    const totalHeight=
    document.documentElement.scrollHeight-
    window.innerHeight;

    const progress=
    (window.scrollY/totalHeight)*100;

    document.querySelector(".progress-bar")
    .style.width=progress+"%";

});

const mouseGlow =
document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

    mouseGlow.style.left =
    e.clientX + "px";

    mouseGlow.style.top =
    e.clientY + "px";

});

document.addEventListener('mousemove',(e)=>{

    document.body.style.setProperty(
        '--mouse-x',
        `${e.clientX}px`
    );

    document.body.style.setProperty(
        '--mouse-y',
        `${e.clientY}px`
    );

});

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

document.addEventListener('mousemove',(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateGlow(){

    currentX += (mouseX-currentX)*0.08;
    currentY += (mouseY-currentY)*0.08;

    document.body.style.setProperty(
        '--mouse-x',
        `${currentX}px`
    );

    document.body.style.setProperty(
        '--mouse-y',
        `${currentY}px`
    );

    requestAnimationFrame(animateGlow);

}

animateGlow();

// Open sidebar
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('open');
});

// Close sidebar
document.getElementById('closeSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
});

// Toggle submenu
document.querySelectorAll('.has-submenu > a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = link.parentElement;
    parent.classList.toggle('open');
  });
});