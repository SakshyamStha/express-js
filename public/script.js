const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = [];

// CREATE
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") return;

  const todo = {
    id: Date.now(),
    text: text
  };

  todos.push(todo);
  renderTodos();
  todoInput.value = "";
});

// READ + RENDER
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.text;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = () => editTodo(todo.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTodo(todo.id);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    todoList.appendChild(li);
  });
}

// UPDATE
function editTodo(id) {
  const newText = prompt("Edit your task:");

  if (!newText) return;

  todos = todos.map(todo =>
    todo.id === id ? { ...todo, text: newText } : todo
  );

  renderTodos();
}

// DELETE
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}