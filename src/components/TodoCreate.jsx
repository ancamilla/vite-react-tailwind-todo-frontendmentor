import { useState } from "react";

const TodoCreate = ({createTodo}) => { 

    const [title, setTitle] = useState("");


    const handleSubmitAddTodo = (e) => {
    /* preventDefault hace que no se recargue la página al enviar el formulario */
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title); //crea o añade un todo
        setTitle(""); //esto hace que se limpie el input
        
    }

    return (
        <form onSubmit={handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-4 gap-4 items-center flex px-4 dark:bg-gray-800">
          <span className="rounded-full border-2 w-5 h-5 inline-block 
             text-gray-300"></span>
          <input 
            type="text" 
            placeholder="Create a new todo..." 
            className="w-full text-gray-400 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}      
          />
        </form>
    )
}

export default TodoCreate;