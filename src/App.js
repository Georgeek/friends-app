import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col, Button } from "react-bootstrap";

import Friend from './components/friends';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Testing friends app
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My React</h2>
        </div>

        <div className="friend-list">
          <Grid>
            <Friend
              name={'Georgeek'}
              img={'https://pp.userapi.com/c626622/v626622756/6d4c1/KpTzKg6lde0.jpg'}/>
            <Friend
              name={'Businka'}
              img={'https://pp.userapi.com/c630220/v630220870/49b1d/slL4JTst23o.jpg'}
            />
            <Friend
              name={'Peche'}
              img={'https://pp.userapi.com/c630918/v630918756/3ec43/ZgrOiAXsIv0.jpg'}
            />
            <Friend
              name={'Chebusya'}
              img={'https://pp.userapi.com/c630918/v630918756/3ec43/ZgrOiAXsIv0.jpg'}
            />

          </Grid>
        </div>

      </div>
    );
  }
}

export default App;
