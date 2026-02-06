let makeTask= (event) => {

    event.preventDefault()

    let list = document.querySelector('[data-list]')
    let input = document.querySelector('[data-form-input]')
    let values = input.value

    let task = document.createElement('li')
    task.classList.add('task')
    let content = `<p class="content">${values}<p>`
    
    task.innerHTML = content
    list.appendChild(task)

    input.value = " "

}

let newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', makeTask)