const database = require("./db");
const express = require("express");
const cors = require("cors");

const {
	getTodos,
	createTodo,
	updateTodo,
	deleteTodo
} = require("./dao/todoDao");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/todos", async (req, res) => {
	try {
		const data = await getTodos();
		res.json(data);
	} catch (error) {
		console.log(`Något gick fel: ${error}`);
		res.status(500).json({ "message:": "Något gick fel" });
	}
});

app.post("/create", async (req, res) => {
	const { task } = req.body;
	try {
		const data = await createTodo(task);
		res.json({ data: ` Ny todo skapades, id ${data}` });
	} catch (error) {
		console.log(`Något gick fel: ${error}`);
		res.status(500).json({ "message:": "Något gick fel" });
	}
});

app.put("/update", async (req, res) => {
	const { id, done } = req.body;

	try {
		await updateTodo(id, done);
		res.json({ "message:": `Todo uppdaterades ${id}` });
	} catch (error) {
		console.log(`Något gick fel: ${error}`);
		res.status(500).json({ "message:": "Något gick fel" });
	}
});

app.delete("/delete", async (req, res) => {
	const { id } = req.body;

	try {
		await deleteTodo(id);
		res.json({ "message:": `Todo togs bort ${id}` });
	} catch (error) {
		console.log(`Något gick fel: ${error}`);
		res.status(500).json({ "message:": "Något gick fel" });
	}
});

app.listen(5000, (req, res) => {
	console.log(`port: http://localhost:5000`);
});
