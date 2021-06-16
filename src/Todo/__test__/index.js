import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Todo from '../index';

test('should render todo component', () => {
  const { getByTestId } = render(<Todo />);
  expect(getByTestId('header').textContent).toEqual('Todo App');
});

test('should add new Todo', () => {
    const { queryAllByTestId, getByTestId } = render(<Todo />);
    const todoList = queryAllByTestId("todo-list");
    expect(todoList.length).toBe(0);

    const todoTextInput = getByTestId("txtTodo");
    fireEvent.change(todoTextInput, {target: {value: "get milk"}});
    fireEvent.submit(getByTestId("todoForm", {preventDefault: jest.fn()}));
    expect(queryAllByTestId("todo-list").length).toBe(1);

    const deleteBtn = queryAllByTestId("btnTestDelete");
    fireEvent.click(deleteBtn[0]);
    expect(queryAllByTestId("todo-list").length).toBe(0);
})
