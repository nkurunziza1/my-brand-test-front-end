let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})


  let params = (new URL(document.location)).searchParams;
  let name = params.get('id')
  
  console.log(name)

  const getStorage =JSON.parse(localStorage.getItem('blogValues')) ;
// wibuke ko getStorage is an array
const blogContent = getStorage.find(x => x.id == name)

function takeBlogView(){
    let blogDisplay = document.getElementById('blog-display')
    
        blogDisplay.innerHTML = `
        <div class="single-blog" id="blog-display">
      
        <h1><a href="">${blogContent.blogTitleInputValue}</a></h1>
        <img src="${blogContent.blogImageTitle}"></img>
       <p>
       ${blogContent.blogContentValue}
       </p>
       <i><img src="/imge&icon/heart like.png" alt=""></i>
       <input type="text" placeholder="Leave comment here" id="comment-input" 
       class="comment-input">
       <input type="submit" name="" value="submit" id="comment-submit" class="comment-submit">
       
        `
       
    } 
 
  takeBlogView()
let commentInput = document.getElementById('comment-input')
let commentSubmit = document.getElementById('comment-submit')
let  comments = 1;
commentSubmit.addEventListener('click', ()=>{
let commentInputValue = commentInput.value; 
    if(commentInput.value === ""){
        commentInput.style.borderColor = 'red'  
    }else{

    
    comments +=1

getStorage.push(
{
commentInputValue:commentInputValue,
comments:comments

})
console.log(getStorage.commentInputValue)
commentInput.value === ""
let SetStorage =localStorage.setItem('blogValues', JSON.stringify(getStorage))
}
})
console.log(commentInput)
  