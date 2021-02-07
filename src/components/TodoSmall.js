import React from 'react'

const TodoUnder = ({text, todo , todos, setTodos}) => {
    const DeleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const CompleteHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    const LikeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.liked === todo.liked){
                return{
                    ...item, liked: !item.liked
                }
            }
            return item
        }))
    }
    return ( 
        <div  className="todo">
            <li  className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
            <button onClick={CompleteHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={DeleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            <button onClick={LikeHandler} className={`heart-btn ${todo.liked ? "liked" : ""}`}><i className="fas fa-heart"></i></button>
        </div>
     );
} 
 
export default TodoUnder;