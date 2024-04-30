import TodoItem from "../todo-item/TodoItem";

function TodoList({ todos, deleteTodoFn, handleTodoCompleted }) {

    return (
        <ul className="todo-list">
          {
            todos.map(todo => {
              return (
                <TodoItem key={todo.id}
                          todo={todo}
                          handleTodoCompleted={handleTodoCompleted}
                          deleteTodoFn={deleteTodoFn}  
                />
              )
            })
          }

        </ul>
    );
}

export default TodoList;
