import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Insidecollections=(props)=>{
    return(
        <>
            <div className="card " style={{ width: '18rem' }}>
        <img src={props.img} className="card-img-top" alt="..."/>
        
      </div>
        </>
    );
}
export default Insidecollections;