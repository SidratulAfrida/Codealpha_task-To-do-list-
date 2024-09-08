document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('taskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="button-group">
            <button class="complete" onclick="toggleComplete(this)">Complete</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(li);
    
    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function toggleComplete(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}
