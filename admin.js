let adminOpen = document.getElementById('admin-open')
let adminMenu = document.getElementById('admin-content')


adminOpen.addEventListener('click',displayMenu)
function displayMenu(e){
    adminMenu.classList.toggle('focus')
}