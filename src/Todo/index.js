import React, { Component, createRef } from 'react';

export class Todo extends Component {
  todoInputRef = createRef();

  state = {
    todoList: [],
    filterType: 'all'
  };

  addTodo = (event) => {
    event.preventDefault();

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
        this.todoInputRef.current.value = '';
      },
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

  deleteItem = (todo) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((x) => x.id === todo.id);
    const newList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    this.setState({
      todoList: newList,
    });
  }

  selectAll = () => {
    const { todoList } = this.state;
    const newList = [];
    todoList.forEach((item) => {
      if(!item.isDone) {
        item.isDone = true;
      } else {
        item.isDone = false;
      }
      newList.push(item);
    });
    this.setState({todoList: newList});
  }

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
        <h1>Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" ref={this.todoInputRef} required />
          <button type="submit">
            Add Todo
          </button>
          <button type="button" onClick={()=>{this.deleteSelected()}}>Delete</button>
        </form>
        <div>
          {todoList.filter((todo) => {
              if(filterType === 'pending') {
                return todo.isDone === false;
              } else if (filterType === 'completed') {
                return todo.isDone === true;
              } else {
                return true;
              }
            }).map((todo) => {
            return (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => this.completeTodo(todo)}
                />
                <span style={{textDecoration: todo.isDone ? 'line-through' : "none"}}>
                  {todo.todoText}
                </span>
                <button type="button" onClick={() => {this.deleteItem(todo)}}>Delete</button>
              </div>
            );
          })}
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
