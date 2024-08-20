document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskDatetime = document.getElementById('task-datetime');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const taskDate = taskDatetime.value;
        
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText} ${taskDate ? `- ${new Date(taskDate).toLocaleString()}` : ''}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <button class="complete">Complete</button>
            </div>
        `;
        taskList.appendChild(li);

        taskInput.value = '';
        taskDatetime.value = '';

        const editBtn = li.querySelector('.edit');
        const deleteBtn = li.querySelector('.delete');
        const completeBtn = li.querySelector('.complete');

        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText) {
                li.querySelector('span').innerHTML = `${newTaskText} ${taskDate ? `- ${new Date(taskDate).toLocaleString()}` : ''}`;
            }
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
    });
});
