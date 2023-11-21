import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import AuthService from '../../Service/Auth.Service'


class Header extends Component {

    constructor(props) {
        super(props);
        this.Auth = new AuthService();

    }

    handleLogout = () => {
      
        this.Auth.isUserlogout()

    }

    render() {
        return (
            <div className="header">
                <div className="appText">Giffy</div>

                <div className="header__left">

                <Link to="/dashboard"  >
                    <div className="header__link" variant="outline-success">Dashboard</div>
                </Link>

                <Link to="/bookmark" >
                    <div className="header__link">Bookmarks</div>
                </Link>

                <Link to="/login" >
                    < button className="header__logout" onClick={this.handleLogout} variant="outline-success">Logout </button>
                </Link>
                </div>

            </div>
        );
    }
}

export default Header;