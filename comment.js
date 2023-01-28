let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content')   
adminOpen.addEventListener('click',(e)=>{
    adminContent.classList.toggle('focus')
    e.preventDefault()   
   })


   // function deleteComment(id){
   //    let  getStore= JSON.parse(localStorage.getItem('blogValues'))
         
   //    let index1 = getStore.findIndex((obj) => obj.id === id)
      
   //    getStore.splice(index1.commentWords, 1)
  
   //    localStorage.setItem('blogValues', JSON.stringify(getStore))
  
   //    window.location.reload()  
   // }
// display comment
   
 function showComment(){
    let params = (new URL(document.location)).searchParams;
    let name = params.get('id')
    
    let getStore =JSON.parse(localStorage.getItem('blogValues'))
   
    let blogCont = getStore.find(x => x.id == name)
    let commentAppend = document.getElementById('comment-message')
    
    
 for(let valu of getStore){
  
   for(let val of valu.commentWords){
    
    let div = document.createElement('div')

    div.innerHTML = `
    <h3>${valu.blogTitleInputValue}</h3>
    <p>${val.commentvalue}</p>
     <button onclick=deleteComment(${val.id})>Delete</button> 
     
`
 commentAppend.appendChild(div)

   }    
}    

 }

showComment()
