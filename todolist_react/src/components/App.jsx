import React, { useState } from "react";
import ToDoItems from "./ToDoItems";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.trim()) {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  function addTask(event) {
    if (event.key === "Enter" && inputText.trim()) {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  function deleteItem(id) {
    setItems((prevVal) => {
      return prevVal.filter((ele, ind) => {
        return id !== ind;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          onKeyDown={addTask}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, ind) => (
            <ToDoItems
              key={ind}
              id={ind}
              item={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
