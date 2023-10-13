import { useState } from 'react';
import './App.css';

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
        {items.map((item) => {
            return <li key={crypto.randomUUID()}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
