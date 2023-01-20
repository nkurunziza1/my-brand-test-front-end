function deleteList(id){
    let getBlogValue = JSON.parse(localStorage.getItem('blogValues'))
    console.log(getBlogValue)
    const index = getBlogValue.findIndex((obj) => obj.id === id)
    
    getBlogValue.splice(index, 1)

    localStorage.setItem('blogValues', JSON.stringify(getBlogValue))

    window.location.reload()
}



function getValue(){
    let messageTable = document.getElementById('message-table')
    let getBlogValue = JSON.parse(localStorage.getItem('blogValues'))
    
    console.log('hello')

    for (const value of getBlogValue) {
        let tableRow = document.createElement('tr')
        tableRow.innerHTML = `<td> ${value.blogTitleInputValue}</td>
        <td> ${value.blogDate}</td>
        
        <td>
        <button onclick ="editBlog(${value.id})">Edit</button>
        <button onclick ="deleteList(${value.id})">Delete</button>
        </td>
       
        `
        messageTable.appendChild(tableRow)

    }  
  }
  getValue()