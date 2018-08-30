import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";
import ReactComponentMountImg from "./react-component-mount.jpg";
import DubboImg from "./dubbo.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  getSysUserName = () => {
    fetch("/api/getUsername")
    .then(res => res.json())
    .then(user => this.setState({ username: user.username }));
  }

  getInfo = () => {
    // fetch("https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/user")
    fetch("/api/getInfo")
    .then(res => res.json())
    .then(res => console.log('GetInfo res is: ', res))
  }
  
  componentDidMount() {
    this.getSysUserName();
    this.getInfo();
  }

  render() {
    return (
      <div>
        {this.state.username ? (
          <h1>Hello {this.state.username}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <h2>dubbo protocol</h2>
        <img src={DubboImg} alt="react" />
      </div>
    );
  }
}
