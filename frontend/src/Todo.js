import React, { useState } from "react";

export default function Todo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = () => {
        // check inputs
        if (title.trim() !== "" && description.trim() !== "") {
            // add item to list
            setTodos([...todos, {title,description}])
        }
    };
    return (
        <>
            <div className="row p-3 bg-success text-light">
                <h1>Todo Project with MERN Stack</h1>
            </div>
            <div className="row">
                <h3>Add Item</h3>
                <p className="text-success">Item added successfully</p>
                <div className="form-group d-flex gap-2">
                    <input
                        placeholder="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                    <input
                        placeholder="description"
                        type="text"
                        onChange={(e) => setDescription(e.target.description)}
                        value={description}
                        className="form-control"
                    />
                    <button className="btn btn-dark" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
