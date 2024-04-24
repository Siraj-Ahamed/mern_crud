const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Sample in-memory  storage
// let todos = [];

// Connecting mongodb
mongoose
    .connect("mongodb://localhost:27017/mern-jvl")
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log("ERROR: ", err);
    });

// Creating Schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: String,
});

// Creating Model
const todoModel = mongoose.model("Todo", todoSchema);

app.post("/todos", async (req, res) => {
    const { title, description } = req.body;

    try {
        const newTodo = new todoModel({ title, description });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
});

app.get("/todos", (req, res) => {
    // res.json(todos);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
