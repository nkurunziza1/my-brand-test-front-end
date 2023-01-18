
// on making sidebar menu

let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})

let commentsNumber = document.getElementById('comments-number')
let storageComments = JSON.parse(localStorage.getItem('comments'))
console.log(storageComments)
console.log(commentsNumber)

commentsNumber.innerHTML =storageComments + "comments"; 





