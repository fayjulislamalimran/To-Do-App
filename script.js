// Select elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.className = 'todo-item';
  
  // Task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  
  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();

  // Append text and button to list item
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  // Add list item to the list
  todoList.appendChild(li);

  // Clear the input field
  todoInput.value = '';
}

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on pressing "Enter"
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
