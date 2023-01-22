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
       <i><img src="/imge&icon/heart like.png" alt="" onclick ="like()"></i>
       <input type="text" placeholder="Leave comment here" id="comment-input" 
       class="comment-input">
       <input type="submit" name="" value="submit" 
       onclick='comment()' class="comment-submit">
       
        `
       
    } 
 
  takeBlogView()
let commentInput = document.getElementById('comment-input')
let commentSubmit = document.getElementById('comment-submit')


console.log(commentInput)
function like()  {
    let params = (new URL(document.location)).searchParams;
    let name = params.get('id')

    let getStorage =JSON.parse(localStorage.getItem('blogValues')) ;
// wibuke ko getStorage is an array
let blogContent = getStorage.find(x => x.id == name) 
blogContent.likes +=1

const blogIndex = getStorage.findIndex(x => x.id == name)

getStorage[blogIndex] = blogContent;
console.log(blogContent)
console.log(getStorage)
localStorage.setItem('blogValues', JSON.stringify(getStorage)) 
}


function comment(){
    let params = (new URL(document.location)).searchParams;
    let name = params.get('id') 

    let blogContent = getStorage.find(x => x.id == name) 

    let getStorage =JSON.parse(localStorage.getItem('blogValues')) 

    blogContent.comment +=1
}