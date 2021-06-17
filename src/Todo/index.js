import React, { Component, createRef } from "react";

export class Todo extends Component {
  todoInputRef = createRef();

  state = {
    todoList: [],
    filterType: 'all'
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
    const index = todoList.findIndex((x) => x.id === todo.id);

    const res = await fetch(`http://localhost:8080/todoList/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({
        todoText: todo.todoText,
        isDone: !todo.isDone,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const todoString = await res.json();

    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        todoString,
        ...todoList.slice(index + 1),
      ],
    });
  };

  deleteItem = async (todo) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((x) => x.id === todo.id);

    const res = await fetch(`http://localhost:8080/todoList/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1),
      ],
    });
  }

  // selectAll = () => {
  //   const { todoList } = this.state;
  //   const newList = [];
  //   todoList.forEach((item) => {
  //     if(!item.isDone) {
  //       item.isDone = true;
  //     } else {
  //       item.isDone = false;
  //     }
  //     newList.push(item);
  //   });
  //   this.setState({todoList: newList});
  // }

  // deleting the completed/selected items
  deleteSelected = () => {
    const { todoList } = this.state;
    const newList = todoList.filter((item) => {
      return !item.isDone;
    });
    this.setState({
      todoList: newList,
    });
  }

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
          <button type="button" onClick={()=>{this.deleteSelected()}}>Delete</button>
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
                <span style={{textDecoration: todo.isDone ? 'line-through' : "none"}}>
                  {todo.todoText}
                </span>
                <button data-testid="btnTestDelete" type="button" onClick={() => {this.deleteItem(todo)}}>Delete</button>
              </div>
            ),
          )}
        </div>
        <div>
          <button type="button" onClick={() => {this.setState({filterType: 'all'})}}>All</button>
          <button type="button" onClick={() => {this.setState({filterType: 'pending'})}}>Pending</button>
          <button type="button" onClick={() => {this.setState({filterType: 'completed'})}}>Completed</button>
        </div>
      </div>
    );
  }
}

export default Todo;
