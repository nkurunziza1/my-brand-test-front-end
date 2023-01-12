let openMenu = document.getElementById('open')

let menu = document.getElementById('menu') 

openMenu.addEventListener('click', () =>{
 menu.classList.toggle('active')
})
function signup(){
    var signupEmail = document.getElementById('email').value;
    var signupPassword = document.getElementById('password').value;
    var signupUsername = document.getElementById('username').value;

    localStorage.setItem('signupEmail',signupEmail)
    localStorage.setItem('signupPassword',signupPassword)
    localStorage.setItem('signupUsername',signupUsername)
}

function login(e){
 var loginEmail = document.getElementById('email').value;  
 var loginPassword = document.getElementById('password').value;
 var loginUsername = document.getElementById('username').value;

 var getSignupEmail = localStorage.getItem('signupEmail')
 var getSignupPassword = localStorage.getItem('signupPassword')
 var getSignupUsername = localStorage.getItem('signupUsername')
 if(loginEmail === getSignupEmail){
    if(loginPassword === getSignupPassword){
        if(loginUsername === getSignupUsername){
            alert('login successful')
        }else{
            
            alert('invalid username')
            
        }
    }else{
        alert('invalid password')
    }
 }else{
    alert('invalid details')
 }
console.log(getSignupEmail)

e.preventDefault()
}

