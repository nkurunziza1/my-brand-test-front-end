
// on making sidebar menu

let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})
function getMainArticles(){

    let mainArticles  = document.getElementById('main-articles')
let getBlogValue = JSON.parse(localStorage.getItem('blogValues'))
for(let i =0; i<3; i++){
    if(getBlogValue === ""){
     return false
    }else{
        let mainHOld = document.createElement('div')
        mainHOld.className = "classic";

        mainHOld.innerHTML =`
        
        <a href="alborton.html?id= ${getBlogValue[i]}">${getBlogValue[i].blogTitleInputValue}</a>
        <img src="${getBlogValue[i].blogImageTitle}" alt=""">
        <div class="like-comment-share">
            <img src="/imge&icon/hand like.png" alt="">
            <img src="/imge&icon/chat comment.png" alt="" id="comment-btn">
            <!-- <img src="/imge&icon/share icon.png" alt=""> -->
        </div>
        <div class="like-share-comment-p">
            <p><span style="color: red; margin-right: 5px;">12</span>Likes</p>
            <p><span style="color: red; margin-right: 5px;">12</span>Comment</p>
            <!-- <p><span style="color: red; margin-right: 5px;">12</span>Share</p> -->
      
       
        `  
        mainArticles.appendChild(mainHOld)
    }
  
 
}
}
getMainArticles()
// mainArticles.innerHTML =`
// <h3><a href="/alborton.html?id=${getBlogItems[0].id}">${getBlogItems[0].blogTitleInputValue}</a></h3>
// <img src="${ getBlogItems[0].blogImageTitle}">
// <img src="/imge&icon/hand like.png" alt="">
// <img src="/imge&icon/chat comment.png" alt="" id="comment-btn">

// `

// how to extract a query parameter from a link using javascript.





 