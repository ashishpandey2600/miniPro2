// create

let addBtn = document.getElementById('add_btn')
addBtn.addEventListener('click',addChapter)
let parentList = document.getElementById('parentList')
function addChapter(e){
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    console.log(currentInput.value)

    let currentChapter = currentInput.value

    let newli = document.createElement('li')
    // newli.classList.add('list-group-item')
    // newli.textContent = currentInput.value
    newli.className = "list-group-item d-flex justify-content-between"


    newli.innerHTML = ` <h3 class="flex-grow-1" >${currentChapter}</h3>
    <button class="btn btn-warning mx-3">Edit</button>
     <button class="btn btn-danger" on>Remove</button>`
    parentList.appendChild(newli)
}

    //Remove Chapter
    function removeChapter(currElement)
    {
        if(parentList.children[0].className == "emptyMsg"){
            parentList.children[0].remove()
        }
       currElement.parentElement.remove()
      parentList = document.getElementById('parentList');
       if(parentList.children.length <= 0){
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptyMsg")
        newEmptyMsg.textContent = "Nothing is here. Please Add text here"
        parentList.appendChild(newEmptyMsg)
       }
    }
    // for Editing
    function editChapter(currElement){
        if(currElement.textContent=="Done"){
            currElement.textContent = "Edit"
            let currChapterName=currElement.previousElementSibling.value

            let currInput = document.createElement('h3');
            currHeading.className = "flex-grow-1"
            currHeading.textContent = currChapterName
            currElement.parentElement.replaceChild(currHeading,currElement.previousElementSibling)
        }
        else{
        currElement.textContent = "Done"
        console.log(currElement.previousElementSibling)
        let currChapterName=currElement.previousElementSibling.textContent
        let currInput = document.createElement('input');
        currInput.type = "text"
        currInput.placeholder = "Chapter Name"
        currInput.className = "form-control"
        currInput.value = currChapterName
        currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling)
    }}



