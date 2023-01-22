let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content')
adminOpen.addEventListener('click', () => {
    adminContent.classList.toggle('focus')

})
let adminBlogMessage = document.getElementById('admin-blog-message')
let uploadImageBtn = document.getElementById('blog-upload-btn')
let blogSubmitBtn = document.getElementById('admin-submit-button')
blogSubmitBtn.addEventListener('click', updateBlog)

let blogImageChooseInput = document.getElementById('blog-imageChoose-input')
let blogTitleInput = document.getElementById('blog-titleInput')
let blogContent = document.getElementById('content')



const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function updateBlog() {
    //    let blogImageChooseInputValue = blogImageChooseInput.value;
    let blogTitleInputValue = blogTitleInput.value;
    let blogContentValue = blogContent.value;
    var uploadedImage = document.getElementById('blog-imageChoose-input').files[0]


    if (blogTitleInputValue === '') {
        adminBlogMessage.innerHTML = '** you have forgot to fill Blog Title'
        adminBlogMessage.style.color = 'red'
        blogTitleInput.style.borderColor = 'red';
    } else {

        blogTitleInput.style.borderColor = 'black';
        adminBlogMessage.innerHTML = ''
    }
    if (blogContentValue === '') {
        adminBlogMessage.innerHTML = ' ** you have forgot to fill Blog content '
        adminBlogMessage.style.color = 'red'
        blogContent.style.borderColor = 'red';
    } else {
        blogContent.style.borderColor = 'black';
        adminBlogMessage.innerHTML = '';
    }


    if (!uploadedImage) {

        adminBlogMessage.innerHTML = "** please upload image the space"
    }

    if (blogTitleInputValue === '' ||
        !uploadedImage || blogContentValue === '') {
        adminBlogMessage.innerHTML = "** please fill the space"
    } else {

        blogTitleInput.style.borderColor = 'black';
        blogContent.style.borderColor = 'black';
        blogTitleInput.value = "";
        blogContent.value = "";
        blogImageChooseInput.value = "";

        let storage = JSON.parse(localStorage.getItem('blogValues')) || [];
        storage.push({
            id:storage.length +1,
            blogTitleInputValue: blogTitleInputValue,
            blogImageTitle: await toBase64(uploadedImage),
            blogContentValue: blogContentValue,
            blogDate:new Date(),
            likes:0,
            comments:[
                {
                  commentsNumber:0,
                  commentWord:[],

                }
            ]
            
        })
        
        console.log(storage)
        adminBlogMessage.innerHTML = 'You already create blog'
        adminBlogMessage.style.color = 'green'
        setTimeout(function blogMessage() {
            adminBlogMessage.innerHTML = ''
        }, 3000)
        let storageValue = localStorage.setItem('blogValues', JSON.stringify(storage))
    }
}