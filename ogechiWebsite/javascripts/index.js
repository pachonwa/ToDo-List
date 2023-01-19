let form = document.getElementById("form");
let listOfTasks = document.getElementById("listOfTasks");
let tasks = document.getElementById("tasks");
let userInput = document.getElementById("userInput");
let submittedTask = document.getElementsByClassName("submittedTask");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userInput.value) {
        let newTask = document.createElement('li');
        let cancelDiv = document.createElement('div');
        let cancel = document.createElement('i');
        cancel.className = "fa-solid fa-ban cancelIcon";
        cancelDiv.append(cancel);

        newTask.className = "submittedTask";
        newTask.innerText = userInput.value;
        newTask.append(cancelDiv);

        newTask.addEventListener('click', (e) => {
            e.preventDefault();
            newTask.classList.toggle('completed');
            cancel.classList.toggle('complete');
        });

        cancel.addEventListener('click', (e) => {
            e.preventDefault();
            newTask.remove();
        });

        listOfTasks.appendChild(newTask);
        
        userInput.value = '';
    }
});

