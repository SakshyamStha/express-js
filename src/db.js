import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
  filename: "./database.sqlite", // persistent file
  driver: sqlite3.Database,
});

// Create tables
await db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email VARCHAR UNIQUE,
    password TEXT
  );
`);

await db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    task TEXT,
    completed INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

export default db;