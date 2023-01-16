let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content')   
adminOpen.addEventListener('click',()=>{
    adminContent.classList.toggle('focus')
    
   })
   
   let uploadImageBtn = document.getElementById('blog-upload-btn')
   let blogSubmitBtn = document.getElementById('admin-submit-button')
   blogSubmitBtn.addEventListener('click' ,updateBlog)
   
   
//    let blogImageChooseInput = document.getElementById('blog-imageChoose-input')
   let blogTitleInput = document.getElementById('blog-titleInput')
   let blogContent = document.getElementById('content')
   
   function updateBlog(){
      
//    let blogImageChooseInputValue = blogImageChooseInput.value;
   let blogTitleInputValue= blogTitleInput.value;
   let blogContentValue = blogContent.value; 
   
   if(blogTitleInputValue === ''){
      blogTitleInput.style.borderColor = 'red';
   }else{
    
      blogTitleInput.style.borderColor = 'black';
   }
  if(blogContentValue === ''){ 
    blogContent.style.borderColor = 'red'; 
     }else{
      blogContent.style.borderColor = 'black'; 
     }

   if(blogTitleInputValue === '' || blogContentValue === ''){
    console.log('Please fill all required spaces')
   }else{
      blogTitleInput.style.borderColor = 'black';
      blogContent.style.borderColor = 'black'; 
      blogTitleInput.value = "";
      blogContent.value    ="";
   }

   }
   
   
   