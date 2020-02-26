class Todos {
  createList(todoList) {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;

    if (this.newTodo === null) {
      this.newTodo.push(todoList);
    } else {
      this.newTodo = [];
    }
  }

  showList(list) {
    const newElement = document.createElement("div");
    const listUi = document.getElementById("list-ui");

    newElement.innerHTML = `
      <div class="card">
        <div class="card-header">Todo List</div>
        <div class="card-body">
          <h5 class="card-title">${list.name}</h5>
          <p class="card-text">${list.description}</p>

          <button class="btn btn-danger" name="delete">Eliminar</button>
        </div>
      </div>
    `;

    listUi.appendChild(newElement);
  }

  deleteList(newElement) {
    const listUi = document.getElementById("list-ui");

    if (newElement.name === "delete") {
      newElement.parentElement.parentElement.remove();
    }
  }

  clearInputs() {
    const name = (document.getElementById("name").value = "");
    const description = (document.getElementById("description").value = "");
  }
}

export default Todos;
