import React from 'react'
import '../Popular_cities/cities.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import PlacesCard from '../Reusable/Component3/placecard'
const Cities = () => {
    return (
        <>
            <div className="cities">
                <h4 style={{ fontWeight: 'lighter' }}>Popular localities in and around <strong style={{ fontWeight: 'bolder' }}>Hyderabad</strong></h4>
                <div className="listsitems">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">Jubilee   Hills<br/>   142 cities</li>
                        <li class="list-group-item">Jubilee   Hills<br/>   142 cities </li>
                        <li class="list-group-item">Jubilee   Hills<br/>   142 cities</li>
                        
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item">Jubilee   Hills<br/>   142 cities</li>
                        <li class="list-group-item">Jubilee   Hills<br/>   142 cities </li>
                        <li class="list-group-item">Jubilee   Hills<br/>   142 cities</li>
                    </ul>
                  
              
                </div>
            </div>
        </>
    )
}
export default Cities;