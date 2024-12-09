import React from 'react'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="f-c-1">
                <div className="f-c-1-1">
                    <p>400 University Drive Suite 200 Coral Gables,</p>
                    <p>FL 33146</p>
                </div>
                <div className="f-c-1-2">
                    <div className="fc-1-2-left">
                        <div className="fc-link">
                            <p className="one">Links</p>
                            <div className='home-links'>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/Shop">Shop</a></li>
                                    <li><a href="/About">About</a></li>
                                    <li><a href="/Contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="help">
                            <p className="one">Help</p>
                            <div className='help-links'>
                                <ul>
                                    <li><a href="#">Payment Options</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Privacy Policies</a></li>                                </ul>
                            </div>
                        </div>
                        <div className="newsletter">
                            <p className="one">Newsletter</p>
                            <p className="form">
                                <input type="text" placeholder='Enter Your Email Address'/>
                                <button>SUBSCRIBE</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f-c-2">
                <p>2022 Meubel House. All rights reverved</p>
            </div>
        </div>
    </div>
)
}

export default footer