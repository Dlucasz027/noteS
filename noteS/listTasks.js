( () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const updateStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    let render = () => {
        let list = document.querySelector('[data-list]');
        list.innerHTML = ''; 

        tasks.forEach((task, index) => {
            let taskElement = document.createElement('li');
            taskElement.classList.add('task');
            if (task.done) taskElement.classList.add('done');

            let content = `<p class="content">${task.text}</p>`;
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

    let timerInterval;
    let activeTimer = null;

    let formatTime = (seconds) => {
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    let startTimer = (duration, display, type) => {
        clearInterval(timerInterval);
        
        let timeLeft = duration;
        display.innerText = formatTime(timeLeft);

        timerInterval = setInterval(() => {
            timeLeft--;
            display.innerText = formatTime(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert(type === 'work' ? "Work session finished! Time to rest." : "Break over! Get back to work.");
            }
        }, 1000);
    };

    document.getElementById('start-work').addEventListener('click', () => {
        let minutes = document.getElementById('work-input').value;
        let display = document.getElementById('work-display');
        startTimer(minutes * 60, display, 'work');
    });

    document.getElementById('start-break').addEventListener('click', () => {
        let minutes = document.getElementById('break-input').value;
        let display = document.getElementById('break-display');
        startTimer(minutes * 60, display, 'break');
    });
})();