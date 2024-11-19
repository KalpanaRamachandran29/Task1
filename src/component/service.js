import React from 'react'
import wave_pulse_heartbeat_icon from './images/wave_pulse_heartbeat_icon.png'
import bounding_box_circles_icon from './images/bounding_box_circles_icon.png'
import calender_icon from './images/calender_icon.png'
import radio_waves_icon from './images/radio_waves_icon.png'
import './service.css'


let Service=()=>{
    return(
        <div className="services-container">
            <div id="services-row1">
                <h1>SERVICES</h1>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div id="services-row2">
                <div class="services-column">
                    <img src={wave_pulse_heartbeat_icon} alt="icon1" style={{color:"#38b9d6"}}/>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="services-column">
                    <img src={bounding_box_circles_icon} alt="icon2" style={{color:"#38b9d6"}}/>
                    <h3>Sed ut perspici</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="services-column">
                    <img src={calender_icon} alt="icon3" style={{color:"#38b9d6"}}/>
                    <h3>Magni doleres</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="services-column">
                    <img src={radio_waves_icon} alt="icon4" style={{color:"#38b9d6"}}/>
                    <h3>Nemo enim</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Service;