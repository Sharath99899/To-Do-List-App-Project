// Select the necessary elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task to the list
addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = inputField.value.trim();
    if (taskText === '') {
        alert('Please Enter a Task.');
        return;
    }

    // Create new task list item
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'align-items-center');

    // Create task text span
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    taskSpan.classList.add('flex-grow-1', 'me-3');  // Ensures the text takes up available space

    // Create Complete and Delete buttons
    const completeButton = document.createElement('button');
    completeButton.classList.add('btn', 'btn-complete', 'me-2');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.addEventListener('click', function () {
        taskSpan.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-delete');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener('click', function () {
        listItem.remove();
    });

    // Append task and buttons to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    // Append the list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    inputField.value = '';
}
