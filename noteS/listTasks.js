( () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const updateStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const render = () => {
        const list = document.querySelector('[data-list]');
        list.innerHTML = ''; 

        tasks.forEach((task, index) => {
            const taskElement = document.createElement('li');
            taskElement.classList.add('task');
            if (task.done) taskElement.classList.add('done');

            const content = `<p class="content">${task.text}</p>`;
            taskElement.innerHTML = content;

            taskElement.appendChild(DoneButton(index));
            taskElement.appendChild(RemoveButton(index));
            
            list.appendChild(taskElement);
        });
    };

    let makeTask = (event) => {
        event.preventDefault();
        let input = document.querySelector('[data-form-input]');
        let value = input.value.trim();

        if (value !== "") {
            tasks.push({ text: value, done: false }); 
            updateStorage(); 
            render();       
            input.value = "";
        }
    };

    let newTask = document.querySelector('[data-form-button]');
    newTask.addEventListener('click', makeTask);

    let DoneButton = (index) => {
        let doneButton = document.createElement('button');
        doneButton.classList.add('ui', 'positive','icon','button', 'check-button');
        doneButton.innerHTML = '<i class="check icon"></i>';
        doneButton.addEventListener('click', () => {
            tasks[index].done = !tasks[index].done; 
            updateStorage();
            render();
        });
        return doneButton;
    };

    let RemoveButton = (index) => {
        let removeButton = document.createElement('button');
        removeButton.classList.add('ui', 'negative', 'icon', 'button');
        removeButton.innerHTML = '<i class="trash icon"></i>';
        removeButton.addEventListener('click', () => {
            tasks.splice(index, 1); 
            updateStorage();
            render();
        });
        return removeButton;
    };

    render();
})();