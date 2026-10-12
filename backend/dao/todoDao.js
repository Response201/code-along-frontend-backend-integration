const database = require("../db");

async function getTodos(){

const db = await database;
const data = await db.all("SELECT * FROM todos");
return data

}


async function createTodo(task){

const db = await database;
        // SKRIV INTE SÅ HÄR : const data = await db.run("INSERT INTO todos (task) VALUES(`${task}`)")
        const data = await db.run("INSERT INTO todos (task) VALUES (?)", task);
return data.lastID

    }

async function updateTodo(id,done){

    const db = await database;
		await db.run("UPDATE todos SET done=(?) WHERE id = (?)", done, id);

}

async function deleteTodo(id) {
    const db = await database;
		await db.run("DELETE FROM todos WHERE id = (?)", id);
}


module.exports = { getTodos, createTodo, updateTodo, deleteTodo};
