//styles not added yet
//todo's 
//add edit button and delete button
import React,{useState} from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([])

  function update(e){
    const newValue= e.target.value;
    setInputText(newValue);
  }
  function handleSubmit(e){
   
      e.preventDefault();
  }
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div onClick={handleSubmit} className="App">
     <input placeholder={inputText}  onChange={update}></input>
     <input type="submit" onClick={addItem} value="add" />
     {/* <li>{items}</li> it's render only once time but when we use map we can render it as many time we inter the value.*/} 
     <div>
     <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
     </div>
    </div>
  );
}
