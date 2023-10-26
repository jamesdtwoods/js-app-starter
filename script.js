function onReady() {
  console.log('Javascript still works! What a gosh darn relief.');
}

let toDoCounter = 0;

function handleSubmit (event) {
  // stop the form from taking over refreshing
  event.preventDefault();
  console.log('working?');

  // go *get* the input
  let todoText = document.getElementById('todo-text').value;
  let todoAuthor = document.getElementById('todo-author').value;

  // clear the inputs -> set the value to be an empty string
  document.getElementById('todo-text').value = '';
  document.getElementById('todo-author').value = '';
  console.log(todoText, todoAuthor);

  let todoList = document.getElementById('todoList');

  todoList.innerHTML += `
  <li>
    <button onclick="deleteToDo(event)">❌</button>
    ${todoText} (${todoAuthor})
  </li> `;

  toDoCounter ++;
  console.log(toDoCounter);

  document.getElementById('toDoCounter').textContent = toDoCounter;
}

function deleteToDo (event) {
  console.log('you want to get rid of this:');
  event.target.parentElement.remove();
  toDoCounter --;
  console.log(toDoCounter);
  document.getElementById('toDoCounter').textContent = toDoCounter;


}



onReady();

