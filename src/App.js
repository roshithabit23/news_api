// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import News from './components/News';

function App() {
  //Create a State to store the selected category
  const [category,setCategory]=useState("general");
  return (
<div className="App">
  <h1>News Application</h1>
  <button onClick={()=>setCategory("general")}>general</button>
  <button onClick={()=>setCategory("technology")}>technology</button>
  <button onClick={()=>setCategory("sports")}>sports</button>
  <News category={category}/>
</div>
 );
}

export default App;
