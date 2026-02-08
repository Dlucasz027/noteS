( () => {
    let makeTask= (event) => {

    event.preventDefault()

    let list = document.querySelector('[data-list]')
    let input = document.querySelector('[data-form-input]')
    let values = input.value

    let task = document.createElement('li')
    task.classList.add('task')
    let content = `<p class="content">${values}<p>`

    task.innerHTML = content
    
    task.appendChild(DoneButton())
    list.appendChild(task)
    input.value = " "

}

let newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', makeTask)

let DoneButton = () => {
    let doneButton = document.createElement('button')

    doneButton.classList.add('check-button')
    doneButton.innerText = 'Done'

    doneButton.addEventListener('click', doneTask)
    return doneButton
}

let doneTask = (event ) => {
    let doneButton = event.target

    let taskCompleted = doneButton.parentElement

    taskCompleted.classList.toggle('done')
}
})()