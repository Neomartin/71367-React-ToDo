
export default function TodoItem({ todo, handleTodoCompleted, deleteTodoFn  }) {
  return (
    <li className="todo-item">

        <div className="todo-left">
            <input  type="checkbox" 
                    defaultChecked={todo.completed} 
                    className='todo-checkbox'
                    onChange={() => handleTodoCompleted(todo.id)}        
            />   

            <span className={`todo-text ${todo.completed ? 'done' : ''}`}>
                {todo.text}
            </span>
        </div>

        <button className='todo-delete' onClick={ () => deleteTodoFn(todo.id) }>❌</button>

    </li>
  )
}
