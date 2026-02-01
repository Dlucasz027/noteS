let makeTask= (event) => {
    event.preventDefault()
    let input = document.querySelector('[data-form-input]')
    let values = input.value
    console.log(values)
    input.value = " "
}

let newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', makeTask)