import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // handleLogout

  // handleSignupOrLogin

  // handleClick

  // handleNewComment

  // --------- Lifecycle Methods --------- //

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Main/>
      </div>
    );
  }
}

export default App;
