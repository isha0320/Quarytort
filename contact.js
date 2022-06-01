
    var input= document.querySelectorAll("input");
var button = document.querySelector("button");
var msg = document.querySelector("textarea").value;
button.addEventListener("click",(e)=>{
e.preventDefault();
var Email=input[1].value;
var name = input[0].value;
let patEmail = /^[A-Za-z0-9._-]{3,20}@[A-Za-z0-9]{3,20}[.][A-Za-z.]{3,6}$/;
if(patEmail.test(Email)&&name!=" "&& msg!=" "){
    console.log(name, Email, msg);
    name= " ";
    Email=" ";
    msg =" ";
    window.open("home.html")
}
else{
alert("Fill all the details!");
}
})
