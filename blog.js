let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 
let comments =0;
openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})


let commentInput = document.getElementById('comment-input');
let commentSubmitBtn = document.getElementById('comment-submit')

commentSubmitBtn.addEventListener('click', submitComment)

function submitComment(){
if(commentInput.value ===""){
commentInput.style.borderColor='red';
}else{
    comments++;
    commentInput.style.borderColor='green';
    commentInput.value="";
localStorage.setItem('comments', comments)


}

}