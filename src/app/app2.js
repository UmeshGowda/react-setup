import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import updateUserInfo from './actions/updateUserInfo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.userInfo,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.userInfo !== state.userInfo) {
      return {
        userInfo: props.userInfo
      };
    }
    return null;
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }


  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleButtonClick = (type) => {
    const { userInfo, name, email } = this.state;
    let obj = {
      userName: type==='name'? name: userInfo.userName,
      userEmail: type==='email'? email: userInfo.userEmail
    }
    this.props.updateUserInfo(obj);
  }

  render() {
    const { userInfo } = this.state;

    return (
      <div className="App">
        <header>
          <p> User Name : {userInfo.userName} </p>
          <p> User Email : {userInfo.userEmail} </p>
          <p>
            <input type='text' placeholder="Enter user name" onChange={this.handleNameChange} />
            <button onClick={()=>{this.handleButtonClick('name')}}>Click Me</button>
          </p>
          <p>
            <input type='email' placeholder="Enter user email" onChange={this.handleEmailChange} />
            <button onClick={()=>{this.handleButtonClick('email')}} >Click Me</button>
          </p>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUserInfo: updateUserInfo
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
