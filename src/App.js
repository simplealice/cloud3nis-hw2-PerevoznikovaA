import { useState } from 'react';
import './App.css';
import Task from './components/Task'
import TaskAdd from './components/TaskAdd';

function App() {
  const [todos, setTodos] = useState([])
  
  const addTask = (userInput) => {
    if (userInput) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        isComplete: false
      }

      setTodos([...todos, newTodo])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const changeState = (id) => {
    setTodos([
      ...todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete} : { ...todo }
      )
    ])
  }

  return (
    <div className="todo-app">
      <h1 className="title">ToDoList</h1>

      <TaskAdd addTask={addTask} />
      { todos.map((todo) => {
        return (
          <Task
            todo={todo}
            key={todo.id} 
            state={changeState}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;
