import React, { useState } from 'react';
import Button from '../CounterApp/Button.js';
let sampleid = 0;
const todoList = [
  {
    id: 'e0',
    task: 'Sample first todo',
    state: 'Completed',
  },
];

const TodoList = () => {
  const [todoState, setTodoState] = useState(todoList);
  const addToTodo = () => {
    //debugger;
    sampleid++;
    setTodoState([
      ...todoState,

      {
        id: `e${sampleid}`,
        task: `New todo e${sampleid}`,
        state: 'Pending',
      },
    ]);
  };
  const markascomplete = (id) => {
    let changedState = [...todoState];
    for (var item of changedState) {
      if (item.id == id) {
        item.state = 'Completed';
      }
    }

    setTodoState(changedState);
  };
  const deleteTodo = (id) => {
    let changedState = todoState.filter((item, index) => item.id !== id);
    setTodoState(changedState);
  };
  const list = todoState.map((item, index) => {
    return (
      <li key={item.id} style={{ display: 'flex' }}>
        <span>{item.task}</span>
        <Button
          operation={item.state}
          clickHandler={markascomplete}
          id={item.id}
        />
        <Button operation="Delete" clickHandler={deleteTodo} id={item.id} />
      </li>
    );
  });
  return (
    <div>
      <ul>{list}</ul>
      <Button operation="Add To Todo" clickHandler={addToTodo} />
    </div>
  );
};

export default TodoList;
