import React, { Component, createRef } from "react";

export class index extends Component {
  todoInputRef = createRef();

  state = {
    todoList: [],
  };

  addTodo = () => {
    const { todoList } = this.state;

    this.setState(
      {
        todoList: [
          {
            id: new Date().valueOf(),
            todoText: this.todoInputRef.current.value,
            isDone: false,
          },
          ...todoList,
        ],
      },
      () => {
        this.todoInputRef.current.value = "";
      }
    );
  };

  completeTodo = (todo) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((x) => x.id === todo.id);
    const newList = [
      ...todoList.slice(0, index),
      { ...todo, isDone: !todo.isDone },
      ...todoList.slice(index + 1),
    ];
    this.setState({
      todoList: newList,
    });
  };

  deleteItem = (todoItem) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((todo) => todo.id === todoItem.id);
    const newList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
    this.setState({ todoList: newList });
  };

  render() {
    const { todoList } = this.state;

    return (
      <div>
        <h1>Todo App</h1>
        <div>
          <input type="text" ref={this.todoInputRef} />
          <button type="button" onClick={this.addTodo}>
            Add Todo
          </button>
        </div>
        <div>
          {todoList.map((todo) => {
            return (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => this.completeTodo(todo)}
                />
                <span>{todo.todoText}</span>
                <button onClick={() => this.deleteItem(todo)}>
                  Delete item
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default index;
