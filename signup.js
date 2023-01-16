// on sign up page
let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})


let signupName = document.getElementById('name');
let signupEmail = document.getElementById('email');
let signupPhone = document.getElementById('phone');
let signupPassword = document.getElementById('password');
let signupUsername = document.getElementById('username');
   
function signup(){
let  signupNameValue = signupName.value;
let  signupEmailValue = signupEmail.value;
let  signupPhoneValue = signupPhone.value;
let  signupPasswordValue = signupPassword.value;
let  signupUsernameValue = signupUsername.value;



if(signupNameValue  === ""){
    signupName.style.borderColor = 'red'
}else{
    signupName.style.borderColor = 'black'
}
if(signupEmailValue === ""){
    signupEmail.style.borderColor = 'red'
}else{
   signupEmail.style.borderColor = 'black'
   localStorage.setItem('signupEmail',signupEmailValue)
}
if(signupPhoneValue  === ""){
    signupPhone.style.borderColor = 'red'
}else{
    signupPhone.style.borderColor = 'black'
}
if(signupPasswordValue === ""){
    signupPassword.style.borderColor = 'red'
    localStorage.setItem('signupPassword',signupPasswordValue)
}else{
    signupPassword.style.borderColor = 'black'
}
if(signupUsernameValue === ""){
    signupUsername.style.borderColor = 'red' 

}else{
signupUsername.style.borderColor = 'black'
}
if(signupNameValue  === "" && signupEmailValue === ""){
    return;
}else{
    signupName.value = '';
    signupEmail.value = '';
    signupPhone.value = '';
    signupPassword.value = '';
    signupUsername.value = '';
}



}