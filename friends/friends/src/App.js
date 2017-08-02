import React, { Component } from 'react';
import FriendsList from './Components/FriendsList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
      </div>
    );
  }
}

export default App;
