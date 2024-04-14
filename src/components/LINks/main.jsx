import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Addrestaurant from '../Reusable/compoenent3/addRestaurant/res';
import Sign from '../Reusable/compoenent3/signup/sign.jsx';
import Logins from '../Reusable/compoenent3/login/Login.jsx'
export default function Linkss() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/addrestaurants'><Addrestaurant /></Route>
                    <Route path='/sign'><Sign /></Route>
                    <Route path='/Login'><Logins /></Route>
                </Switch>
            </Router>
        </div>
    )
}
