import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, fuga alias. Eos expedita nemo nobis ex velit rerum voluptate! Quod vero animi officia inventore facilis commodi vitae? Aut, quod quam.
                    </p>
                    <div className="footer-social">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delievery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+91 6301149451</li>
                        <li>
                            Contact :santhosh49451@gmail.com
                        </li>
                    </ul>
                </div>
            
               
            </div>
            <p className="footer-copy-right">
                    Copyright 2024 @santhoshkumar-All Rights Reserved.
                </p>

        </div>
    )
}

export default Footer