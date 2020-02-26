import Todo from "./todo";
import Todos from "./todos";

const sendForm = document.getElementById("send-form");

sendForm.addEventListener("submit", e => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;

  const todo = new Todo(name, description);
  const todoUi = new Todos();

  todoUi.createList(todo);
  todoUi.showList(todo);
  todoUi.clearInputs();

  const listUi = document.getElementById("list-ui");

  listUi.addEventListener("click", e => {
    const todoUi = new Todos();
    todoUi.deleteList(e.target);

    e.preventDefault();
  });

  e.preventDefault();
});
