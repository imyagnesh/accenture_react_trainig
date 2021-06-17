import React, { Component, createRef } from "react";

export class Todo extends Component {
  todoInputRef = createRef();

  state = {
    todoList: [],
    filterType: "all",
    selectedItems: [],
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:8080/todoList");
    const todos = await res.json();
    this.setState({
      todoList: todos,
    });
  }

  addTodo = async (event) => {
    event.preventDefault();

    const { todoList } = this.state;

    const res = await fetch("http://localhost:8080/todoList", {
      method: "POST",
      body: JSON.stringify({
        todoText: this.todoInputRef.current.value,
        isDone: false,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const todo = await res.json();

    this.setState(
      {
        todoList: [todo, ...todoList],
      },
      () => {
        this.todoInputRef.current.value = "";
      }
    );
  };

  completeTodo = async (todo) => {
    const { todoList } = this.state;
    const res = await fetch(`http://localhost:8080/todoList/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...todo, isDone: !todo.isDone }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const updatedTodo = await res.json();

    const index = todoList.findIndex((x) => x.id === todo.id);
    const newList = [
      ...todoList.slice(0, index),
      updatedTodo,
      ...todoList.slice(index + 1),
    ];
    this.setState({
      todoList: newList,
    });
  };

  deleteTodo = async (todo) => {
    const { todoList } = this.state;
    await fetch(`http://localhost:8080/todoList/${todo.id}`, {
      method: "DELETE",
    });
    const index = todoList.findIndex((x) => x.id === todo.id);
    const newList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
    this.setState({
      todoList: newList,
    });
  };

  render() {
    const { todoList, filterType, selectedItems } = this.state;

    return (
      <div>
        <h1 data-testid="header">Todo App</h1>
        <form onSubmit={this.addTodo} data-testid="todoForm">
          <input
            data-testid="txtTodo"
            type="text"
            ref={this.todoInputRef}
            required
          />
          <button type="submit">Add Todo</button>
        </form>
        <div>
          <button
            type="button"
            onClick={async () => {
              const promise = [];
              for (let i = 0; i < selectedItems.length; i++) {
                const element = selectedItems[i];
                promise.push(
                  fetch(`http://localhost:8080/todoList/${element}`, {
                    method: "DELETE",
                  })
                );
              }
              await Promise.allSettled(promise);
              this.setState({
                todoList: todoList.filter((x) => !selectedItems.includes(x.id)),
              });
            }}
          >
            Delete Selected Todos
          </button>
          {todoList
            .filter((todo) => {
              if (filterType === "pending") {
                return todo.isDone === false;
              }
              if (filterType === "completed") {
                return todo.isDone === true;
              }
              return true;
            })
            .map((todo) => (
              <div data-testid="todo-list" key={todo.id}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    console.log(event.target.checked);
                    if (event.target.checked) {
                      this.setState({
                        selectedItems: [...selectedItems, todo.id],
                      });
                    } else {
                      this.setState({
                        selectedItems: selectedItems.filter(
                          (x) => x !== todo.id
                        ),
                      });
                    }
                  }}
                />
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => this.completeTodo(todo)}
                />
                <span
                  style={{
                    textDecoration: todo.isDone ? "line-through" : "none",
                  }}
                >
                  {todo.todoText}
                </span>
                <button
                  data-testid="btnDelete"
                  type="button"
                  onClick={() => this.deleteTodo(todo)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              this.setState({ filterType: "all" });
            }}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ filterType: "pending" });
            }}
          >
            Pending
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ filterType: "completed" });
            }}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
