import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from'./component/Message'

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Greet name='Clark' heroName='SuperMan'>
        <p>Favourite Character!</p>
        <button value="Action">Action</button>
      </Greet>


      <Welcome name='Class'>
      <p>Class component uses \'This\' keyword.</p>
      </Welcome>
      
      
      <Hello name="Clark" heroName="SuperMan"/>

      <Message />
    </div>
  );
}

export default App;
