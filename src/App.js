import React, { useState } from 'react';
import './App.css';

function App() {

  // State hook -'useState'

  const [newItem, setNewItem] = useState("");

  // Helper Functions
  function addItem(){
    console.log(newItem)
  }

  return (
    <div className="App">
      {/* Header */}
      <h1>Mom's List of To-do's!</h1>
      {/*Input and button */}
      {/* List of item: unorder list */}
      <input
        type="text"
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        />

        <button>Add</button>

        {/* unordered list */}
        <li>Pick up the kids</li>
        <li>Cook or pick up dinner</li>
        <li>Brush teeth and pick out clothes for tomorrow</li>

    </div>
  );
}

export default App;
