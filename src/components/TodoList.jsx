import TodoCard from "./TodoCard";

const TodoList = () => {
  let todos = ["task 1", "task 2", "task 3"];

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
