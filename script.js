/*console.log("connected");
(function(){
emailjs.init("00raBN_GTI5EOqHD5");
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
e.preventDefault();

let params = {
from_name: document.getElementById("name").value,
from_email: document.getElementById("email").value,
message: document.getElementById("msg").value
};

emailjs.send("service_c2vyutt","template_56ezy59",params)
.then(function(){
alert("Message Sent Successfully ✅");
document.getElementById("contact-form").reset();
},
function(error){
alert("Failed ❌");
});
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const themeBtn =
document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

 document.body.classList.toggle("light-mode");

 if(document.body.classList.contains("light-mode")){
   themeBtn.innerHTML="☀️";
 }else{
   themeBtn.innerHTML="🌙";
 }

});
const observer =
new IntersectionObserver(entries=>{

 entries.forEach(entry=>{

  if(entry.isIntersecting){
   entry.target.classList.add("show");
  }

 });

});

document.querySelectorAll("section")
.forEach(section=>{

 section.classList.add("hidden");
 observer.observe(section);

});*/

console.log("connected");

/* ==========================
   EMAIL JS
========================== */
(function () {
  if (window.emailjs) {
    emailjs.init("00raBN_GTI5EOqHD5");
  }
})();

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("msg").value
    };

    emailjs
      .send(
        "service_c2vyutt",
        "template_56ezy59",
        params
      )
      .then(function () {
        const msg=document.getElementById("successMsg");
        msg.style.display="block";
        msg.innerHTML =
    "Your message has been sent successfully. I will contact you shortly.";
        form.reset();
      })
  });
}

/* ==========================
   MOBILE NAVBAR
========================== */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* ==========================
   DARK / LIGHT MODE
========================== */
const themeBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeBtn.innerHTML = "☀️";
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme","light");
        themeBtn.innerHTML = "☀️";
    }else{
        localStorage.setItem("theme","dark");
        themeBtn.innerHTML = "🌙";
    }

});

/* ==========================
   SCROLL REVEAL ANIMATION
========================== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

/* ==========================
   NAVBAR ACTIVE LINK
========================== */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* ==========================
   SMOOTH BUTTON ANIMATION
========================== */
const buttons = document.querySelectorAll(
  ".hero-btn, .get-btn, .send-btn"
);

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-3px)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
  });
});
