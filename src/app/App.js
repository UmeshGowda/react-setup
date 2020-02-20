import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    }
  }

  
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }


  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }


  render() {
    const { name, email } = this.state;
    return (
      <div className="App">
        <header>
          <p> User Name : {name} </p>
          <p> User Email : {email} </p>
          <p>
            <input type='text' placeholder="Enter user name" onChange={this.handleNameChange} />
          </p>
          <p>
            <input type='email' placeholder="Enter user email" onChange={this.handleEmailChange} />
          </p>
        </header>
      </div>
    )
  }
}

export default App;
