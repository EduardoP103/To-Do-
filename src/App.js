import React from 'react';
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el Curso de Introducción a React ', completed: false },
  { text: 'llorar con la cebolla', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
    <TodoSearch/>        
      <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text}  text={ todo.text} />
      ))}
    </TodoList>
     
    <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
