let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})



//on contact 
let  contactEmailInput = document.getElementById('contact-emailInput')
  let  contactNameInput = document.getElementById('contact-nameInput')
    let contactTextareaInput = document.getElementById('contact-textarea')  
let contactBtn = document.getElementById ('contact-btn')

contactBtn.addEventListener('click', ()=>{

  let  contactEmailInputValue = contactEmailInput.value
  let  contactNameInputValue= contactNameInput.value
    let contactTextareaInputValue = contactTextareaInput.value  
   
 if(contactEmailInputValue === ""){
  contactEmailInput.style.borderColor = 'red'
  alert('Name it is Empty')
 }else{
  contactEmailInput.style.borderColor = 'black'
 }
 if( contactNameInputValue === ""){
  contactNameInput.style.borderColor = 'red'
  alert('Email it is empty')
 }else{
  contactNameInput.style.borderColor = 'black'

 }
 if(contactTextareaInputValue ===""){
  contactTextareaInput .style.borderColor = 'red'
 }else{
  contactTextareaInput.style.borderColor = 'black'
 }

if(contactNameInputValue === "" || contactNameInputValue === "" || contactTextareaInputValue ===""){
console.log(false)
}else{
  const storage = JSON.parse(localStorage.getItem('storeValue'))  || []
  console.log('storage', storage)
 
  storage.push({
      id: storage.length +1,
      contactEmailInputValue:contactEmailInputValue,
      contactNameInputValue :contactNameInputValue ,
      contactTextareaInputValue:contactTextareaInputValue,
      
     })
     
 contactNameInput.style.borderColor = 'black';
 contactEmailInput.style.borderColor = 'black';
 contactEmailInput.value = "";
//  contactNameInput.value= "";
 contactTextareaInput.value = "" ;
 
 let localStoreValue = localStorage.setItem('storeValue', JSON.stringify(storage)) 
 
}
  
 

 })






