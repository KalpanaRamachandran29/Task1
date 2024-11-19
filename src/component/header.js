import React from 'react'
import './header.css'

let Header=()=>{
    return(
        <div className="header">
            <div id="header-column1">
                <h1>ARSHA</h1>
            </div>
            <div id="header-column2">
                <nav>
                    <button>Home</button>
                    <button>About</button>
                    <button>Services</button>
                    <button>Portfolio</button>
                    <button>Team</button>
                    <button>Pricing</button>
                    <button>Dropdown
                    {/* <!-- <select name="Dropdown" id="Dropdown">Dropdown</select>--> */}
                    </button>
                    <button>Contact</button>
                </nav>
            </div>
            <div id="header-column3">
                <button onclick="document.location='default.asp'">Get Started</button>
            </div>
        </div>
    )
}

export default Header;