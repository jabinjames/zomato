import React from 'react';
import '../Header/main.css'
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import location from '../Header/location.png'
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp';
import SearchIcon from '@mui/icons-material/Search';
function Main() {
    return (
        <div className='Background'>
            <div className='background-anchor'>
                <div className='gettheapp'>
                    <a href="#">
                        <PhoneAndroidSharpIcon />
                        Get the app
                    </a>
                </div>
                <a href='#'>Add Restaurant</a>
                <a href='#'>Login</a>
                <a href='#'>Sign up</a>
            </div>
            <div className='Background-Somato'>
                <div className=""><h3>SOMATO</h3>
                    <div className="Background-discoverthebest">Discover the best food & drinks in <strong>Hyderabad</strong></div>
                    <div className="Search-bar">
                        <div className="Outer-search-bar">
                            <img ClassName='Arrowdown' src={location} />
                            <input ClassName='Search-input-box-one' type="text" placeholder='Place' />
                            <ArrowDropDownCircleSharpIcon ClassName='Outer-search-Arrowdown' />
                            <SearchIcon ClassName='Searchicon' />
                            <input ClassName='Search-input-box-two' type="text" placeholder='search for restaurant' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
