import React, { Component, createRef } from "react";

export class Todo extends Component {
  todoInputRef = createRef();

  state = {
    todoList: [],
    filterType: "all",
  };

  getTodos = async () => {
    const res = await fetch("http://localhost:8080/todoList");
    const todos = await res.json();
    this.setState({
      todoList: todos,
    });
    console.log(todos);
  };

  async componentDidMount() {
    this.getTodos();
  }

  addTodo = async (event) => {
    event.preventDefault();

    const { todoList } = this.state;

    let res = await fetch("http://localhost:8080/todoList", {
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

    this.getTodos();

    this.setState(() => {
      this.todoInputRef.current.value = "";
    });
  };

  completeTodo = async (todo) => {
    const { todoList } = this.state;
    // const index = todoList.find((x) => x.id === todo.id);
    let res = await fetch(`http://localhost:8080/todoList/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...todo,
        isDone: !todo.isDone,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const edited = await res.json();
    this.getTodos();
  };

  deleteTodo = async (todo) => {
    const res = await fetch(`http://localhost:8080/todoList/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const deleted = await res.json();
    this.getTodos();
  };

  render() {
    const { todoList, filterType } = this.state;

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
