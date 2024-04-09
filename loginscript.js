



var move=document.getElementById("move");
var register=document.getElementById("register");
var sign=document.getElementById("sign");
var logincontent=document.getElementById("logincontent");
var registercontent=document.getElementById("registercontent");
let bol=false;


function divmove(elementL,elementR){
    logincontent.style.transition="left 0.5s ease"
    logincontent.style.left=elementL+"%";
    registercontent.style.transition="0.5s ease";
    registercontent.style.left=elementR+"%";
}
register.addEventListener('click' , function(){
    move.style.left="49%";
    bol=true;
    divmove(-99,50);
    document.getElementById("backowl").style.background="url(singinowl2.png) center  no-repeat";
    document.getElementById("backowl").style.backgroundSize="cover";
})
sign.addEventListener('click' , function(){
    move.style.left="1%";
    bol=false;
    divmove(50,200)
    document.getElementById("backowl").style.background="url(singupowl.png) center  no-repeat";
    document.getElementById("backowl").style.backgroundSize="cover";
})
function left(after){
        move.style.transition="left 0.2s ease";
        move.style.left=after+"%";
}
function leftout(before){
        move.style.transition="left 0.2s ease";
        move.style.left=before+"%";
}

register.addEventListener('mouseenter',function(){
    left(49);
})
register.addEventListener('mouseleave',function(){
    if(bol==false){
        leftout(1)
    }
})
sign.addEventListener('mouseenter' , function(){
    left(1);
})
sign.addEventListener('mouseleave' , function(){
    if(bol==true){
        leftout(49);
    }
})



/* owl move ment */
document.getElementById("loginpassword").addEventListener('mouseenter',function(){
    document.getElementById("owl1").style.display="none";
    document.getElementById("owl2").style.display="block";
    look();
})
document.getElementById("loginpassword").addEventListener('mouseout',function(){
    document.getElementById("owl1").style.display="block";
    document.getElementById("owl2").style.display="none";
})

function look(){
    document.getElementById("bol1").style.tranition="top 4s ease-in-out"
    document.getElementById("bol2").style.tranition="top 4s ease-in-out"
    document.getElementById("bol2").style.top="120px";
    document.getElementById("bol1").style.top="122px";
    document.getElementById("bol1").style.animation="non";
    document.getElementById("bol2").style.animation="non";
}
function lookout(){
    document.getElementById("bol2").style.top="115px";
    document.getElementById("bol1").style.top="114px";
/*     document.getElementById("bol1").style.animation="eye 8s ease-out infinite";
    document.getElementById("bol2").style.animation="eye2 8s ease-out infinite"; */
}
/* document.getElementById("mlogin").addEventListener('mouseenter',function(){

   look();
}) */

var currentXPosition=0;
var currentYPosition=0;
const mouseMove = (event) => {

    currentXPosition=(event.clientX/(window.innerWidth/3));
    currentYPosition=(event.clientY/(window.innerHeight/9));
    if(true){
        document.getElementById("bol1").style.left=(currentXPosition+27.8)+"%";
        document.getElementById("bol2").style.left=(currentXPosition+56.8)+"%";
    }
    if(currentYPosition<180){
        document.getElementById("bol1").style.top=(currentYPosition+40)+"px";
        document.getElementById("bol2").style.top=(currentYPosition+40)+"px";
    }

    console.log(currentXPosition,currentYPosition)
}
window.addEventListener('mousemove' , mouseMove);





 /*    function finalregister() {
        // Get field values
        var userId = document.getElementById("userId").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("cpassword").value;
        var confirmPassword = document.getElementById("confirmpassword").value;
        var agreeTerms = document.getElementById("agreeTerms").checked; // Check if the checkbox is checked 
if (password !== confirmPassword) {
    alert("Password and confirm password do not match!");
    return; // Exit the function if there's an error
}
        // Do something with the values (e.g., validation or sending to server)
        localStorage.setItem("email", email);
    localStorage.setItem("password", password);



        console.log("User ID:", userId);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
         console.log("Agree to Terms:", agreeTerms); 
    } */

var loginflag=false;
    document.getElementById("inpbtn").addEventListener("click", function() {
       /*  var storedEmail = localStorage.getItem("email");
        var storedPassword = localStorage.getItem("password"); */
        
        var username = document.getElementById("loginusername").value;
        var password = document.getElementById("loginpassword").value;
        
            if (username === "project@gmail.com" && password === "sep@9835") {
                alert("Login successful!");
                window.location.href = "mainpage.html"; // Redirect to nextpage.html upon successful login
            }else {
            alert("Incorrect username or password!");
        }
    });
    




    









