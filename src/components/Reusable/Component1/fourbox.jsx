import React from 'react'
import '../Component1/fourbox.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Four = (props) => {
  return (
    <>
      <div className="card " style={{ width: '13rem ',height:'15rem' , borderRadius: '12px' }}>
        <img src={props.img} className="card-img-top" alt="..."  style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}/>
        <div className="card-body">
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </>
  );
}
export default Four;