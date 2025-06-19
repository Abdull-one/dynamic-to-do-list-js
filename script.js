document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';  // Add class for styling

        // Add remove functionality
        removeButton.addEventListener('click', function() {
            listItem.remove();
        });

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});