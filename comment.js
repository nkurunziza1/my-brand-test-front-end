let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content')   
adminOpen.addEventListener('click',(e)=>{
    adminContent.classList.toggle('focus')
    e.preventDefault()   
   })

