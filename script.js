console.log("connected");
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