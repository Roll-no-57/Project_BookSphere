import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <div>
            {/* <hr className="horizontal-line" style={{marginBottom:'50px'}} /> */}
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Book</span>Sphere</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <a href="https://www.facebook.com"><FaFacebook size={32} style={{marginRight:'20px'}}/></a>
                                <a href="https://twitter.com"><FaTwitter size={32} style={{marginRight:'20px'}}/></a>
                                <a href="https://www.instagram.com"><FaInstagram size={32} style={{marginRight:'20px'}}/></a>
                                <a href="https://www.linkedin.com"><FaLinkedinIn size={32} style={{marginRight:'20px'}}/></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i>+8801711127583</p>
                            <p><i class="fa-solid fa-envelope"></i> aoarish397@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Dhaka,Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Horizontal line */}
            <div className='Last-footer'>
                <p>Designed by Apurbo & sizan</p>
            </div>
        </div>
    )
}

export default Footer;
