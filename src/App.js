import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content/content';
import Title from './components/Title/title';
import Window from './components/Window/window'
function App() {
  return (
    <div className="App">
      <Content />
      <Title />
      <Window/>

    </div>
  );
}

export default App;