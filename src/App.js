import { useState } from 'react';
import './App.css';
import Todolist from './list';

function App() {
  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([])

  function handleInput(event) {
    const preValue = event.target.value
    setInputText(preValue)
  }

  function handleClick() {
    setItems((prevItem) => {
      return [...prevItem, inputText]
    })
    setInputText("")
  }

  function deleteItem(id) {
    setItems(prevItem => {
      return prevItem.filter(
        (item, index) => {
          return index !== id
        }
      )
    })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleInput}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((toDoList, index) => {
            return <Todolist 
            key={index} id={index} text={toDoList} onChecked={deleteItem}/>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
