import React, { Component } from 'react';

import AuthService from '../../Service/Auth.Service'
import './login.css'
import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import logo from '../../assets/giphy.gif'



class Login extends Component {

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
          this.Auth.loginUser(username, password)
          .then(response => response.json()
            .then(data=>({status:response.status,body:data})))
            .then( abc=>
              {
                if(abc.status===200)
                {

                  window.localStorage.setItem('id_token', abc.body.token)
                  window.localStorage.setItem('user', JSON.stringify(this.state.username));
                  
                  this.props.history.push({
                                 pathname: '/dashboard'
                             });
                 
                }
                else 
                {
                    this.setState({
                      userNotFound:true,
                      errMessage:"Unauthorized"
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
            
     
              <h2 className="appText">Giffy</h2>
              <div className="log">
                <h3>Login</h3>
              </div>
              <div className="imageClass">
              <img className="imgSize"src={logo}/>
              </div>
          <div className="login">
            
              <form>
                    <div className="login">
                      <input className="textArea" type="text" name="username" value={this.state.username} onChange={this.formInputChangeHandler} placeholder="Username" />
                      <input className="textArea" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.formInputChangeHandler} />
                      <button type="button" variant="outline-success" className="btn1" onClick={this.onSubmitHandler}>
                      Login </button>
                      </div>
              </form>
            </div>
           < div className="fuser">
           
           First Time User?<NavLink to="/register">Sign Up</NavLink>
            </div>       
           
            <div className="errorDisp">
      
      {this.state.userNotFound && <h3>{this.state.errMessage}</h3>}
      </div>
      </div>

        );
    }
}

export default Login;