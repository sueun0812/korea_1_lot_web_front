import React, { useState, useEffect, useRef } from 'react';
import TodoList from './TodoList';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const loadTodosFromLocalStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem('todos2');
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const TodoAppLocalStorage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromLocalStorage);
  const [inputValue, setInputValue] = useState('');
  const nextId = useRef<number>(todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo = { id: nextId.current, text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    nextId.current += 1;
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('todos2', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        onKeyDown={(e) => e.key === 'Enter' ? addTodo() : null}
      />
      <button onClick={addTodo}>Add Todo</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoAppLocalStorage;
