import TodoList from "./components/TodoList";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoComputed from "./components/Todocomputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

/* const initialStateTodo = [
  { id: 1, title: "Complete online JavaScript course", completed: true },
  { id: 2, title: "Jog around the park 3x", completed: false },
  { id: 3, title: "10 minutes meditation", completed: false },
  { id: 4, title: "Read for 1 hour", completed: false },
  { id: 5, title: "Pick up groceries", completed: false },
  { id: 6, title: "Complete Todo App on Frontend Mentor", completed: true },
] */
const initialStateTodo = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => { 
  const [todos, setTodos] = useState(initialStateTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); //guarda datos en localstorage en json formato string 
  }, [todos]);

  
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const updateTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  }

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }


  return (
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]  
      bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 md:bg-[url('./assets/images/bg-desktop-light.jpg')] ] 
      md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">

        <Header />
        <main className="container mx-auto px-4 mt-8 md:max-w-xl">
          <TodoCreate createTodo={createTodo} />
          <TodoList 
            todos={filteredTodos()} 
            removeTodo={removeTodo} 
            updateTodo={updateTodo} 
          />
          <TodoComputed 
          computedItemsLeft={computedItemsLeft} 
          clearCompleted={clearCompleted} 
          />
          <TodoFilter changeFilter={changeFilter} filter={filter}/>
        </main>
        

        <footer className="text-center mt-8 dark:text-gray-400">Drag and drop to reorder list</footer>
      </div>
    );

 }

 export default App;