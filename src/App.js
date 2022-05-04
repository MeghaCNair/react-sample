import React from 'react';
import './style.css';
import Counter from './components/CounterApp/Counter';
import TodoList from './components/TodoApp/TodoList';
import Clock from './components/ClockApp/Clock';
import AppWrapper from './layout/AppWrapper';
export default function App() {
  return (
    <div>
      <AppWrapper>
        <p>This is Counter</p>
        <Counter />
      </AppWrapper>
      <AppWrapper>
        <p>This is TodoList</p>
        <TodoList />
      </AppWrapper>
      <AppWrapper>
       <p> Current Time is </p>
       <Clock/>
      </AppWrapper>
    </div>
  );
}
