const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
addTaskButton.addEventListener('click', addTask);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove';

    removeButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = '';
}