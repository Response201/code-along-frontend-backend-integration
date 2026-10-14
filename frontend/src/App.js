
import { useEffect, useState } from "react";
import TodoCard from "./components/TodoCards";
import "./App.css";
import { fetchData, fetchTodos } from "./functions/fetchData";



function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");


    // Hämta Todos http://localhost:5000
    //  res.status(500).json({ "message:": "Något gick fel" });

    const getTodos = async () => {
        try {
            const data = await fetchTodos()

            if (data) {

                setTodos(data)

            } else {

                setTodos([])

            }
        } catch (error) {
            console.log(error)
        }
    };


    // Hämta todos när sidan laddas
    useEffect(() => {
        getTodos()
    }, []);


    // Skapa todo
    const createTodo = (e) => {
        e.preventDefault();


    };


    // Tabort todo
    const deleteTodo = async (todo) => {

    };


    /* 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        task TEXT NOT NULL,
        done BIT DEFAULT 0

        app.put("/update", async (req, res) => {
        const { id, done } = req.body;
    
    */

    // Toggla todo
    const toggleTodo = async (todo) => {

try {

await fetchData("update", "PUT", {id:todo.id, done: todo.done === 1 ? 0 : 1  })

await getTodos()
    
} catch (error) {
    console.log(error)
    
}



    };





    return (
        <main className="container">
            <h1>Min Todo-lista</h1>

            <form onSubmit={(e) => { createTodo(e, task) }}>
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

