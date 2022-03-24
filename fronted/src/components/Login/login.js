import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
  constructor(props){
    super(props);
    this.onChangEmail = this.onChangEmail.bind(this);
    this.onChangPassword = this.onChangPassword.bind(this);
    this.LoginUser = this.LoginUser.bind(this);

    this.state = {
      email:"",
      password:"",
      login: false
  };
  }

  onChangEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangPassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  LoginUser(){
    var data = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("test")
    console.log("test")
    console.log("test")
    console.log("test")
    //Service.Signin(data)
      .then(response => {
        console.log("signin")
        console.log("signin")
        console.log("signin")
        console.log("signin")
        this.setState({
          email: response.data.email,
          password: response.data.password,
          login: true
        });
        console.log(response.data);
      }).catch(e => {
        console.log(e);
      });

  }

  

  render() {
    const center ={
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      };

    return (
      
      <div style={center}>
        Login
        <form>
      <label>
        <p>Email</p>
        <input 
        id="email"
        value={this.state.email}
        type="text"
        onChange={this.onChangEmail}
        className="form-control" />
      </label>
      <label>
        <p>Password</p>
        <input 
        id="password"
        value={this.state.password}
        type="password"
        onChange={this.onChangPassword}
        className="form-control" />
      </label>
      <div>
        <button 
        type="submit"
        onClick={this.LoginUser}
        >Submit</button>
      </div>
    </form>
      </div>
      
      );
  }
}

// const Login=()=>{
//     return (
//         <h1>Login page</h1>
//     )
// }
export default Login;