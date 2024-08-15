import logo from './logo.svg';
import './App.css';
import MiniBot from './presentation/MiniBot.tsx';
import React from 'react';
import './presentation/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiniBot/>
      </header>
    </div>
  );
}

export default App;
