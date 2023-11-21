import React, { Component } from 'react';
import AuthService from '../../Service/Auth.Service'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './register.css'
import logo from '../../assets/giphy.gif'

class Register extends Component {

  constructor(props) {
      super(props);
      this.Auth = new AuthService();
      this.state = {
          username: "",
          password:"",
          error:"",
          userNotFound:false,
          errMessage:""
        };        
  }


  dismissError() {
      this.setState({ error: '' });
    }
  
    onSubmitHandler = (event) => {
      event.preventDefault();
      let username = this.state.username;
      let password = this.state.password;
    
      
      let shouldLogin=true;
      if (!this.state.username) {
        shouldLogin=false;
        return this.setState({ error: 'Username is required' });
      }
  
      if (!this.state.password) {
        shouldLogin=false;
        return this.setState({ error: 'Password is required' });
      }
      
      if(shouldLogin)
      {
        this.Auth.registerUser(username, password)
        .then(response => response.json()
        
          .then(data=>({status:response.status,body:data})))
          .then( abc=>
            {
             
              if(abc.status===201)
              {
                // console.log("token is in login",abc.body.token)
                // window.localStorage.setItem('id_token', abc.body.token)
                // window.localStorage.setItem('user', JSON.stringify(this.state.username));
                
                this.props.history.push({
                               pathname: '/login'
                           });
               
              }
              else 
              {
                  this.setState({
                    userNotFound:true,
                    errMessage:"Username already taken"
                  })
              }
            }
              )
      }
      
    }
  
    formInputChangeHandler = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })

  }



  
  render() {
    return (

      <div>

        <div className="appName">
  
          <h2 className="appText">Giffy</h2>
          <div className="log">
                <h3>Register</h3>
              </div>
        </div>

        <div className="imageClass">
          <img className="imgSize"src={logo}/>

        </div>
      <div className="login">
        
          <Form>
              <Form.Group controlId="formBasicEmail">
                  {/* <Form.Label>Username</Form.Label> */}
                  <Form.Control className="textArea" type="text" name="username" value={this.state.username} onChange={this.formInputChangeHandler} placeholder="Username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control className="textArea" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.formInputChangeHandler} />
              </Form.Group>
              <Button className="buttonStyle" type="button" variant="outline-success" className="btn1" onClick={this.onSubmitHandler}>
                  Sign Up </Button>
          </Form>
          </div>
      
            
       <div className="errorDisp">
      
      {this.state.userNotFound && <h3>{this.state.errMessage}</h3>}
      </div>
  </div>
    );
}
}



export default Register;