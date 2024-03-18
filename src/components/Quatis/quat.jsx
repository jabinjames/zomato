import React from 'react'
import './quat.css'
import Four from '../Reusable/Component1/fourbox'
import orderonline from '../../Images/images/orderonline.jpg'
import dinningout from '../../Images/images/diningout.jpg'
import pro_and_plus from '../../Images/images/proandproplus.jpg'
import nightlife from '../../Images/images/nightlifeandclubs.jpg'
const Quatis=()=>{
    return (
        <div className="container">
            <div className="outer-container">
                <Four img={orderonline} content={"Order Online"}/>
                <Four img={dinningout} content={"Dining out"}/>
                <Four img={pro_and_plus} content={"Pro and Pro Plus"}/>
                <Four img={nightlife} content={"Night Life and Clubs"}/>
            </div>
        </div>
    )
}
export default Quatis;