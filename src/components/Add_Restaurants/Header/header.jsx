import React from 'react';
import '../../Add_Restaurants/Header/header.css';
import Banner from '../../../Images/banners/banner2.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../../Reusable/compoenent3/login/Login';
import Sign from '../../Reusable/compoenent3/signup/sign';
import Glob from '../../../Images/icons/glob.png'
import CalenderIcons from '../../../Images/icons/calenderIcon.png'
import ResturantIcon from '../../../Images/icons/restaurantIcon.png'

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
                {/* <Route path="http://localhost:5173"  /> */}
                <Route path="/Login" component={Login} />
                <Route path="/Sign" component={Sign} />
                <div className="Resgister-title">
                    <h2>Register your resturant on zomato </h2>
                    <p>For free and get more customers</p>
                    <div className="button-box">
                        <div className="first-button">
                            <button>Resgister your resturants</button>
                        </div>
                        <div className="second-button">
                            <button>Resturant already listed? claim now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-header">
                <div className="heading">
                    <h2>Why should partner with Somato</h2>
                    <p>Somato enables you to get 60% more renvenue,10x new customer and boost your  brand visiblity  by providing insights to improve your bussiness</p>
                </div>
            </div>
            <div className="three-box">
                <div className='outer-three-box'>
                    <div className="first-box">
                        <img src={Glob} alt='earths image' />
                        <p className='first-para'>500+ cities</p>
                        <p>in India</p>
                    </div>
                    <div className="second-box">
                        <img src={CalenderIcons} alt="calenderIcon" />
                        <p className='first-para'>2.5 lakhs+</p>
                        <p>resturants listings</p>
                    </div>
                    <div className="third-box">
                        <img src={ResturantIcon} alt="returants image" />
                        <p className='first-para'>4 crore+</p>
                        <p>monthly orders</p>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Header;
