import React, { Component } from 'react';

import Friend from './components/friends';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My React</h2>
        </div>

        <div className="friend-list">
          <Friend
            name={'Georgeek'}
            img={'https://pp.userapi.com/c626622/v626622756/6d4c1/KpTzKg6lde0.jpg'}/>
          <Friend
            name={'Busya'}
            img={'https://pp.userapi.com/c630220/v630220870/49b1d/slL4JTst23o.jpg'}
          />
        </div>

      </div>
    );
  }
}

export default App;
