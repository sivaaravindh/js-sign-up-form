let Username=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let address=document.getElementById("cAddress");
let form=document.getElementById("form")
// let uNValue=Username.value;
// let emailValue=email.value;
// let passwordValue=password.value;
// let addressValue=address.value;
form.addEventListener ("submit", function(e){
    localStorage.setItem("username",Username.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value)
    localStorage.setItem("address",address.value)
})

function getGo() {
   
  var get= window.location.href="index.html";

}
