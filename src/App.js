import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import TestFields from './test.fields';



import SeatSelect from './seat.select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        vehicles: [],
        children: [],
        rows: 8,
        positions: ["Left Window", "Center Seat", "Right Window" ]
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>


        <Form >

        <TestFields />

        <SeatSelect pos={this.state.positions} row={this.state.rows} /> 
        </Form>

          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
        
      </div>
    );
  }
}

export default App;
