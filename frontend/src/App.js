
import { useEffect, useState } from "react";
import TodoCard from "./components/TodoCards";
import "./App.css";



function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");


    // Hämta Todos http://localhost:5000
  /*   const getTodos = async () => {
       

        }; */

       
    // Hämta todos när sidan laddas
    /* useEffect(() => {
  
    }, []); */


// Skapa todo
const createTodo =  (e) => {
     e.preventDefault();
 
     
};


// Tabort todo
const deleteTodo = async (todo) => {
    
};


// Toggla todo
const toggleTodo = async (todo) => {
    
};
   
  
 


    return (
        <main className="container">
            <h1>Min Todo-lista</h1>

            <form onSubmit={(e)=> { createTodo(e, task)}}>
                <input
                    type="text"
                    placeholder="Vad behöver du göra?"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button type="submit">Lägg till</button>
            </form>

            <section className="todo-list">
                {todos.map((todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        onDelete={() => deleteTodo(todo)}
                        onToggle={() => toggleTodo(todo)}
                    />
                ))}
            </section>
        </main>
    );
}

export default App;

