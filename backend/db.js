const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

// Ansluter till databasen
async function connectDatabase() {
    try {
        
        // Öppnar databasen
        const database = await open({
            filename: "./todos.db",
            driver: sqlite3.Database
        });

        // Skapar tabellen todos om den inte redan finns
        await database.run(`
            CREATE TABLE IF NOT EXISTS todos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                task TEXT NOT NULL,
                done INTEGER DEFAULT 0
            )
        `);

        console.log("Ansluten till databasen");

       // Returnerar databasen så att vi kan använda den i server.js
        return database;


    } catch (err) {


      // Fångar och visar fel vid anslutning eller skapande av tabell
        console.error("Fel vid anslutning eller skapande av tabell:", err.message);

        // Skickar felet vidare, till exempel till en endpoint
        throw err;
    }
}

// Kör funktionen när filen laddas
module.exports = connectDatabase();