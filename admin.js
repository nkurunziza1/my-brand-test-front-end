let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content')   
adminOpen.addEventListener('click',()=>{
    adminContent.classList.toggle('focus')
    
   })
   let adminBlogMessage = document.getElementById('admin-blog-message')
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
      adminBlogMessage.innerHTML = '** you have forgot to fill Blog Title'
      adminBlogMessage.style.color = 'red'
      blogTitleInput.style.borderColor = 'red';
   }else{
    
      blogTitleInput.style.borderColor = 'black';
      adminBlogMessage.innerHTML = ''
   }
  if(blogContentValue === ''){ 
   adminBlogMessage.innerHTML = '** you have forgot to fill Blog content'
   adminBlogMessage.style.color = 'red'
    blogContent.style.borderColor = 'red'; 
     }else{
      blogContent.style.borderColor = 'black'; 
      adminBlogMessage.innerHTML = '';
     }

   if(blogTitleInputValue === '' && blogContentValue === ''){
      adminBlogMessage.innerHTML = "** please fill the space"
   }else{
   
      blogTitleInput.style.borderColor = 'black';
      blogContent.style.borderColor = 'black'; 
      blogTitleInput.value = "";
      blogContent.value    ="";
   

   let storage =  JSON.parse(localStorage.getItem('blogValues')) || [];
console.log('storage:' ,storage)
     storage.push({
      blogTitleInputValue:blogTitleInputValue,
      blogContentValue:blogContentValue
     })
     adminBlogMessage.innerHTML = 'You already create blog'
     adminBlogMessage.style.color= 'green'
   setTimeout(function blogMessage(){
      adminBlogMessage.innerHTML = ''
   
   },3000)
     let storageValue = localStorage.setItem('blogValues',JSON.stringify(storage))
   }

   }
   
   
   