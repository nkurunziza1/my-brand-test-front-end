let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})




var loginEmail = document.getElementById('email');  
var loginPassword = document.getElementById('password');

let loginMessage = document.getElementById('login-message')

function login(){
    var loginEmailValue = loginEmail.value;  
    var loginPasswordValue =loginPassword.value ;
    

    

 var getSignupEmail = localStorage.getItem('signupEmail')
 var getSignupPassword = localStorage.getItem('signupPassword')
 
 

if(loginEmailValue === "" || loginPasswordValue ===""){
    loginEmail.style.borderColor = 'red'
    loginPassword.style.borderColor = 'red'
    loginMessage.innerHTML = "**please fill all required space";
    loginMessage.style.color = 'red'
 }else{
    loginEmail.style.borderColor = 'black'
    loginPassword.style.borderColor = 'black' 

    loginMessage.innerHTML = "invalid password or email";
 }
//  if(loginPasswordValue ===""){
//     loginMessage.innerHTML = "please fill all required space";
//     loginMessage.style.color = 'red'
//     loginPassword.style.borderColor = 'red'
// }else{
//     loginPassword.style.borderColor = 'black'  
//     loginMessage.innerHTML = "";
// }


if(loginEmailValue === getSignupEmail && 
    loginPasswordValue === getSignupPassword){
    loginMessage.innerHTML = "Login successful";
    loginMessage.style.color='green';
    loginPassword.style.borderColor = 'green';
    loginEmail.style.borderColor = 'green';
    loginPassword.value = getSignupPassword = localStorage.getItem('signupPassword');
    loginEmail.value = getSignupEmail = localStorage.getItem('signupEmail');

    setTimeout(function makeEmpty(){
        loginPassword.value = "";
        loginEmail.value = ""; 
        loginMessage.innerHTML = ""; 
        
        loginPassword.style.borderColor = 'green';
        loginPassword.style.borderColor = 'black';
    },3000)
}
else{

    loginEmail.style.borderColor = 'red'
    loginPassword.style.borderColor = 'red'
    loginMessage.innerHTML = '**Invalid email or password'    
}
}
// 