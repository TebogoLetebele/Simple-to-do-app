import React, { useState } from "react";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  function handleItem(event) {
    const newValue = event.target.value;

    setInputItem(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });

    setInputItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} type="text" value={inputItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
