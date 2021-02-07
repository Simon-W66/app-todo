import React from 'react';
import TodoUnder from './TodoSmall';

const Todo = ({todos, setTodos, filteredTodos }) => {
    return ( 
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <TodoUnder todo={todo} setTodos={setTodos} todos={todos}  text={todo.text} liked={todo.liked} key={todo.id}/>
                ))}
            </ul>
        </div>
     );
}
 
export default Todo;