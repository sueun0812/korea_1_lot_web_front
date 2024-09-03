import React, { useCallback, useMemo, useRef, useState } from "react";
import "./Todo.css";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export default function Index() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const nextIdRef = useRef<number>(1);

  const addTodo = (text: string) => {
    const newTodo = {
      id: nextIdRef.current,
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    nextIdRef.current += 1;
    console.log(todos);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const input = e.target as HTMLInputElement;
      if (input.value.trim() !== "") {
        addTodo(input.value.trim());
        input.value = "";
      }
    }
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        const result = todos.filter((todo) => !todo.completed)
        return result;
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  }, [todos, filter]);

  const toggleTodo = useCallback((id: number) => {
    setTodos(todos => todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  return (
    <div>
      <h1>Hook 사용 예제</h1>
      <p>useState / useRef / useMemo / useCallback</p>

      <hr />
      <div className="app-container">
        <h2>My Todo List</h2>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task"
          onKeyDown={handleKeyPress}
        />
        <div className="buttons-container">
          <button className="btn" onClick={() => setFilter('all')}>All</button>
          <button className="btn" onClick={() => setFilter('active')}>Active</button>
          <button className="btn" onClick={() => setFilter('completed')}>Completed</button>
        </div>
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span
                className={`todo-text ${todo.completed ? "completed" : ""}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}