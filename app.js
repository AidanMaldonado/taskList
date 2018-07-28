// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load All Event Listeners
loadEventListeners();

//Load All Event Listeners
function loadEventListeners() {
  //Add Task Form
  form.addEventListener('submit', addTask);
  //Remove Task
  taskList.addEventListener('click', deleteTask);
  //Remove List
  clearBtn.addEventListener('click', deleteList);
  //Filter List
  filter.addEventListener('keyup', filterTasks);
}

//Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert("Add a task");
  } else {
    //Create li Element
    const li = document.createElement('li');
    //Add Class
    li.className = "collection-item";
    //Create Text Node and Append to LI
    li.appendChild(document.createTextNode(taskInput.value));
    //Create New Link Element
    const link = document.createElement('a');
    //Add Link Element
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link to li
    li.appendChild(link);

    //Append Li to Ul
    taskList.appendChild(li);

    taskInput.value = '';
    e.preventDefault();
  }
}

//Deletes individualtask
function deleteTask(e) {
  const li = document.querySelector('.collection-item');

  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      li.remove();
    }
  }
}

//Clears Task List
function deleteList() {
  //Easier Method
  // taskList.innerHTML = '';

  //Faster Method
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//Filters Task List
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}