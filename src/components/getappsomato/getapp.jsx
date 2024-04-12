import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../getappsomato/getapp.css'
import Appstore from '../../Images/icons/appstore.png'
import Playstore from '../../Images/icons/playstore.png'
import mobile from '../../Images/images/mobile.png'
const Getapp = () => {
    return (
        <>
            <div className="outer-app">
                <div className="mobilepic">
                    <img src={mobile} />
                </div>
                <div className='inner-app'>
                    <div className="app">
                        <h1>Get the Somato App</h1>
                        <p>We will send you a link,open it on your phone to dowload the app</p>
                        <div className="checkbox">
                            <div className="form-check form-check-inline ">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" for="inlineRadio1">Email</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Phone</label>
                            </div>

                        </div>
                        <div className="input-box">
                            <div className="input-group mb-6">
                                <input type="Email" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn " type="button" id="button-addon2">Share app link</button>
                            </div>

                        </div>
                        <div className="dowloadapp">
                            <p>Dowload app from</p>
                            <img className="playstore" src={Playstore} alt="playstore app" />
                            <img src={Appstore} alt="appstore" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Getapp;