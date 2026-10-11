const database = require("./db")
const express = require("express");
const cors = require("cors");

const { getTodos, createTodos, updateTodo, deleteTodo } = require("./dao/todoDao")


const app = express();


app.use(cors());
app.use(express.json())




app.get("/", (req, res) => {
    res.send("Hello World");
});







app.listen(5000, (req, res) => {

    console.log(`port: http://localhost:5000`)


})