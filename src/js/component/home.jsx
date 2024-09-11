import React, { useState } from "react";
import '/workspaces/stephens64-ToDoList-React/src/styles/index.css';

const Home = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const addItem = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            setItems([...items, input]);
            setInput("");
        }
    };

    const removeItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className="todo-container">
            <h1>TODO List</h1>
            <input
                className="task-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={addItem}
                placeholder="Add a task and press Enter"
            />
            <ul className="task-list">
                {items.length === 0 ? (
                    <li className="no-task">No tasks, add a task</li>
                ) : (
                    items.map((item, index) => (
                        <li
                            key={index}
                            className="task-item"
                        >
                            {item}
                            <span
                                className="delete-task"
                                onClick={() => removeItem(index)}
                            >
                                ✖
                            </span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Home;
