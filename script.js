const taskInput = document.getElementById('taskInput');
const addButton = document.querySelector('.add');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== ''){
    const task = document.createElement('li');
    task.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Del';

    deleteButton.addEventListener('click' ,deleteTask);
    task.appendChild(deleteButton);
    taskList.appendChild(task);
    taskInput.value = '';
  }
}

function deleteTask() {
  const taskItem = this.parentElement;
  taskList.removeChild(taskItem);
}

addButton.addEventListener('click', addTask);





const githubImage = document.querySelector('.title img');
const toggleButton = document.querySelector('.toggle-button');
const body = document.querySelector('body');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    githubImage.src = './img/github-mark.svg';
  } else {
    githubImage.src = './img/github-mark-white.svg';
  }

});

