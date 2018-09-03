import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";
import ReactComponentMountImg from "./react-component-mount.jpg";
import DubboImg from "./dubbo.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      info: null,
    };
  };

  getSysUserName = () => {
    fetch("/api/getUsername")
    .then(res => res.json())
    .then(user => this.setState({ username: user.username }));
  };

  getInfo = () => {
    // fetch("https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/user")
    fetch("/api/getInfo")
    .then(res => res.json())
    .then(res => {
      console.log('GetInfo res is: ', res.data);
      this.setState({info: res.data})
    })
  }
  
  componentDidMount() {
    this.getSysUserName();
    this.getInfo();
  }

  render() {
    const {info} = this.state;
    // console.log('render info is: ', info)
    return (
      <div>
        {this.state.username ? (
          <h3>Hello {this.state.username}</h3>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <p>dubbo protocol</p>
        {/* <img src={DubboImg} alt="react" /> */}
        {info ? (
          // info.map((item, index) => {
            // console.log('render info item is: ', item);
            <p>{info.name}</p>
          // })
        ) : (
        <p>123</p>
        )}
      </div>
    );
  }
}
