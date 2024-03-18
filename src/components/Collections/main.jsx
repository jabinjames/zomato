import React from 'react'
import '../Collections/main.css'
import Insidecollections from '../Reusable/Component2/insidecollection';
import cathcthematch from '../../Images/images/cathcthematch.jpg'
import newintown from '../../Images/images/newintown.jpg'
import trendthisweek from '../../Images/images/trendingthisweek.jpg'
import callallbar from '../../Images/images/callingallbarhoppers.jpg'
const Collection=()=>{
    return(
        <>
                <div className="collection">
                    <div className="outer-collection">
                        <h3>Collections</h3>
                        <p>Explore curated lists of top resturants ,cafes,pubs and bars in Hyderbad based on trends</p>
                        <div className="inner-collection">
                                <Insidecollections img={cathcthematch}/>
                                <Insidecollections img={newintown}/>
                                <Insidecollections img={trendthisweek}/>
                                <Insidecollections img={callallbar}/>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Collection;