import React, { useState } from "react"
import './App.css';
import Review from "./Component/Review.js"

function App() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("aaa")
    setName(window.prompt("name:" + "Please Confirm once agin", name))
    setNumber(window.prompt("number:" + "Please Confirm once agin", number))
    setEmail(window.prompt("email:" + "Please Confirm once agin", email))
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      <Review />


    </div>
  );
}

export default App;
