/* ====================================
   MOBILE MENU
==================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ====================================
   CONTACT FORM VALIDATION
==================================== */

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();

const email = document.getElementById("email").value.trim();

const phone = document.getElementById("phone").value.trim();

const course = document.getElementById("course").value;

const message = document.getElementById("message").value.trim();

if(name==="" || email==="" || phone==="" || course==="" || message===""){

alert("Please fill in all the fields.");

return;

}

alert("Thank you! Your registration has been submitted successfully.");

contactForm.reset();

});

}
