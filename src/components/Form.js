import React from 'react';

const Forms = ({setInputText, todos, setTodos, inputText, setStatus}) => {

    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, {
          text: inputText, completed: false, liked: false, id: Math.random() * 100
        },
      ]);
      setInputText("");
    }
    const statusHandler = (e) => {
      setStatus(e.target.value)
    }
    return ( 
        <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input"/>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" onChange={statusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
     );
}
 
export default Forms;