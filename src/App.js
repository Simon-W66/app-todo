import React, {useState, useEffect} from 'react';
import './App.css';
import Forms from './components/Form';
import Todo from './components/Todo';

function App() {
  
  const[inputText, setInputText  ] = useState("");
  const[todos , setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    FilterHandler();
  }, [todos, status])

  const FilterHandler = () => {
    switch(status){
      case "completed":
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
      case "uncompleted":
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
      default:
          setFilteredTodos(todos)
          break;
    }
  }
  return (
    <div className="App">
        <h1>Todo List</h1>
        <Forms inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} filteredTodos={filteredTodos} />
        <Todo todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
