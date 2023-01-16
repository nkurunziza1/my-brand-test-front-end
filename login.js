let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})




var loginEmail = document.getElementById('email');  
var loginPassword = document.getElementById('password');



function login(){
    var loginEmailValue = loginEmail.value;  
    var loginPasswordValue =loginPassword.value ;
    

    

 var getSignupEmail = localStorage.getItem('signupEmail')
 var getSignupPassword = localStorage.getItem('signupPassword')
 
 if(loginEmailValue === getSignupEmail){
    loginEmail.style.borderColor = 'black'
 }else{
    loginEmail.style.borderColor = 'red';

 }
 if(loginPasswordValue === getSignupPassword){

    loginEmail.style.borderColor = 'black'
}else{
    loginPassword.style.borderColor = 'red';
    alert('invalid password')
    
}
if(loginEmailValue === getSignupEmail && loginPasswordValue === getSignupPassword){
   
    console.log('login success')
    loginPassword.style.borderColor = 'green';
    loginEmail.style.borderColor = 'green';
    loginPassword.value = getSignupPassword = localStorage.getItem('signupPassword');
    loginEmail.value = getSignupEmail = localStorage.getItem('signupEmail');
}
}
// 