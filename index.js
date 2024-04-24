const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Sample in-memory  storage
let todos = [];

app.post("/todos", (req, res) => {
    const { title, description } = req.body;
    const newTodo = {
        id: todos.length + 1,
        title,
        description,
    };
    todos.push(newTodo);
    console.log(todos);
    res.status(201).json(newTodo);
});

app.get("/todos", (req, res) => {
    res.json(todos)
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
