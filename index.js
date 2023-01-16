
// on making sidebar menu

let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})



let showCommentBtn = document.getElementById('comment-btn')
let displayComment = document.getElementById('display-comment')



showCommentBtn.addEventListener('click',()=>{
displayComment.style.display = "block";
})
let commentTextarea = document.getElementById('comment-textarea')
let sendCommentBtn = document.getElementById('send-comment-btn')

sendCommentBtn.addEventListener('click',()=>{
 
   let commentTextareaValue = commentTextarea.value;
if(commentTextareaValue ===''){
    console.log('fill the space')

}else{

 console.log(commentTextareaValue)  
 commentTextarea.value = "" 
}


})

let removeDisplaycommentBtn = document.getElementById('remove-comment-btn')
removeDisplaycommentBtn.addEventListener('click', ()=>{
    console.log('woow removed')
    displayComment.style.display = 'none'
    
})

// // on blogs admin


// let uploadImageBtn = document.getElementById('blog-upload-btn')
// let blogSubmitBtn = document.getElementById('admin-submit-button')
// blogSubmitBtn.addEventListener('click' ,updateBlog)


// let blogImageChooseInput = document.getElementById('blog-imageChoose-input')
// let blogTitleInput = document.getElementById('blog-titleInput')
// let blogContent = document.getElementById('content')

// function updateBlog(){
   
// let blogImageChooseInputValue = blogImageChooseInput.value;
// let blogTitleInputValue= blogTitleInput.value;
// let blogContentValue = blogContent.value; 

// if(blogContentValue === '' || blogTitleInputValue === '' || blogImageChooseInputValue === ''){
//     let blogContent = document.getElementById('content')
//     console.log('please fill out all the space') 
    
// }else{
  
//     console.log('success')
//     blogTitleInput.value= "";
//     blogImageChooseInput.value = "";
    
// }

// }





