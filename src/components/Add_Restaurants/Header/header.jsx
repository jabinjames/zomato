import React from 'react';
import '../../Add_Restaurants/Header/header.css';
import Banner from '../../../Images/banners/banner2.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../../Reusable/compoenent3/login/Login';
import Sign from '../../Reusable/compoenent3/signup/sign';
function Header() {
    return (
        <Router>
            <div className="header-container">
                <div className="nav-bar">
                    <nav>
                        <ul>
                            {/* <li><Link to="localhost:5173">Home</Link></li> */}
                            <li><a href="http://localhost:5173">Home</a></li>
                            <li><Link to="/Login">Login</Link></li>
                            <li><Link to="/sign">Signup</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="banner-container">
                    <img src={Banner} alt="banner_image" />
                </div>
                {/* <Route path="http://localhost:5173"  /> */}
                <Route path="/Login" component={Login} />
                <Route path="/Sign" component={Sign} />
            </div>
        </Router>
    );
}

export default Header;
