import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import Button from './components/Button'
import Tabs from "./components/Tabs";

const list = [1, 2, 3, 4];

function App() {
  return (
    <div className="App">
      <Header title = 'Plextech Confessions'/>
      <Tabs>
        <div label="Confessions">
          {list.map((item) => {
            return (<h1>{item}</h1>)
          })}
        </div>
        <div label="Login Page">
          Get from Backend
          <h3>Login Page for Admin Access</h3>
          <button>Enter</button>
          <h3>New Users Register Here</h3>
        </div>
        <div label="Post">
        <h3>Write your Post</h3>
        </div>
        <div label="Admin">
          Add to Backend
        </div>
      </Tabs>
    </div>
  );
}


export default App;
