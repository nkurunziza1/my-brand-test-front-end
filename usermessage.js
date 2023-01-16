
//  let menuActive = document.querySelector('.unOrdered-list').querySelectorAll('a')

//  menuActive.forEach(el => {
//      el.addEventListener('click', function(){
         
//        menuActive.forEach(nav => nav.classList.remove('passive')) 
//        console.log('menu')
//        this.classList.add('passive') 
//      })
 
//  })
let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content')   
adminOpen.addEventListener('click',(e)=>{
    adminContent.classList.toggle('focus')
    e.preventDefault()   
   })

function deleteList(id){
    let getContactValue = JSON.parse(localStorage.getItem('storeValue'))
    console.log(getContactValue)
    const index = getContactValue.findIndex((obj) => obj.id === id)
    
    getContactValue.splice(index, 2)

    localStorage.setItem('storeValue', JSON.stringify(getContactValue))

    window.location.reload()
}
 


function getValue(){
    let messageTable = document.getElementById('message-table')
    let messageDisplay = document.getElementById('admin-message-display')
    let getContactValue = JSON.parse(localStorage.getItem('storeValue'))
    
    console.log('hello')

    for (const value of getContactValue) {
        let tableRow = document.createElement('tr')
        tableRow.innerHTML = `<td>  ${value.contactNameInputValue}</td>
        <td> ${value.contactEmailInputValue}</td>
        <td>${value.contactTextareaInputValue}</td> 
        <td><button onclick ="deleteList(${value.id})">Delete</button></td>`
        messageTable.appendChild(tableRow)

    }  
  }
 
getValue()

