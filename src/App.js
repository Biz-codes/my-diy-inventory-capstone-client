import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from './Landing'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My DIY Inventory</h1>
      </header>
      <main>
        <Landing />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
