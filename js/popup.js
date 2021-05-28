const addTaskButton = document.getElementById('add-task-btn');

addTaskButton.addEventListener('click', () => addTask());

const tasks = [];

const addTask = () => {

    const taskNum = tasks.length;

    tasks.push("");

    const taskRow = document.createElement('div');

    const text = document.createElement('input');
    text.type = 'text';
    text.placeholder = 'Enter a task ...';
    text.addEventListener('change', () => {
        tasks[taskNum] = text.value;
    });

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'X';

    taskRow.appendChild(text);
    taskRow.appendChild(deleteBtn);

    const taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(taskRow);
}