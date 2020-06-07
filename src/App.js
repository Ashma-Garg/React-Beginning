import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from'./component/Message'
import Counter from './component/Counter'
import EventBind from './component/EventBind'
import ParentComp from './component/ParentComp'
import NameList from './component/NameList'

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
      <Counter />
      <Greet name='Clark' heroName='SuperMan'>
        <p>Favourite Character!</p>
        <button value="Action">Action</button>
      </Greet>


      <Welcome name='Class'>
      <p>Class component uses \'This\' keyword.</p>
      </Welcome>
      
      
      <Hello name="Clark" heroName="SuperMan"/>

      <Message />
      <ParentComp />
      <EventBind/>
      <NameList/>
    </div>
  );
}

export default App;
