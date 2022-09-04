import axios from "axios";
import React, { useEffect, useState } from "react";

function App(){
// and useState to controll and render on client side
const [fact, setFact] = useState([])
// we are useing useEffect to control how many times want to call.
useEffect(()=>{
  getQuote()
},[]) 

  const getQuote = () => {
    // axios for better code(its reduce the length of code)
    axios.get('https://catfact.ninja/fact')
    .then(res => {
      setFact(res.data.fact);
      console.log(res.data.fact);
    })
    .catch(err => console.log(err));
    // fetch("https://catfact.ninja/fact")
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
  }

return (
  <>
    <button onClick={getQuote}>Cat Fact</button>
    <div>{fact}</div>
  </>
)
}

export default App;
