import React, { useState } from 'react';
import './App.css';

function App() {

  // State hook -'useState'

  const [newItem, setNewItem] = useState("");
  const[items, setItems] = useState([]);
  //   () => {
  //     first
  //   },
  //   [second],
  // ;
  

  // Helper Functions
 
  function addItem(){

  if (!newItem){
    alert("Enter an task...");
    return
  }



  const item = {
    id: Math.floor(Math.random()* 1000),
    value: newItem

};
      
      setItems(oldList => [...oldList, item])
      setNewItem("");
    }

    function deleteList(id){
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray);
      // console.log(id);
    }
 

  return (
    <div className="App">
      {/* Header */}
      <h1>Mom's List of To-do's!</h1>
      {/*Input and button */}
      <input
        type="text"
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        />

        <button onClick={()=> addItem()}>Add</button>
  
        <ul>
          {items.map( item =>{
            return(
              <li key={item.id}>{item.value} <button onClick={()=>deleteList()}>Delete</button></li>
            )
          })}
        </ul>

    </div>
  );
}

export default App;
