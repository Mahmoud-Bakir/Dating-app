const signinbox = document.getElementById("signin");
const signupbox = document.getElementById("signup");
const signinbtn = document.getElementById("btnsignup");
const signupbtn = document.getElementById("btnsignup");
const ain=document.getElementById("ain");
const aup=document.getElementById("aup");

signinbox.style.display = "none";

ain.addEventListener("click",e=>{
    e.preventDefault();
    signinbox.style.display="flex";
    signupbox.style.display="none"
})






