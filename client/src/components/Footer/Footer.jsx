import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="main-footer p_relative">
        <div className="footer-top p_relative d_block">
          <div className="icon-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-03.png)' }} />
          <div className="container">
            <div className="row clearfix">

              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget left">
                  <div className="logo-widget">
                    <figure className="footer-logo"><Link to={`/`}><img src={logo} alt="logo" /></Link></figure>
                  </div>
                  <div className="widget-content">
                    <p style={{color:'white'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora magnam assumenda, nam cum, minima commodi eaque ex eligendi dignissimos saepe recusandae exercitationem odit porro maxime deleniti velit inventore aperiam?</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><Link to={`/`}>Home</Link></li>
                      <li><Link to={`/about`}>About us</Link></li>
                      <li><Link to={`/properties`}>Property</Link></li>
                      <li><Link to={`/blog`}>Blog</Link></li>
                      <li><Link to={`/contact`}>Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>Property </h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li><Link to={`/property/buy-property`}>Buy Property</Link></li>
                      <li><Link to={`/property/rent-property`}>Rent Property</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget left">
                   <div className="widget-title">
                    <h4>Contact Details</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list clearfix">
                      <li><span className="icon-icon-31" /> Plot.198, Sec 24, Pocket-9, Rohini, New Delhi, Delhi 110085</li>
                      <li><span className="icon-icon-35" /> <a href="tel:+01234567890123">+01 2345 67890 123</a></li>
                      <li><span className="icon-60" /> <a href="mailto:info@gmail.com">info@gmail.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="footer-bottom p_relative">
          <div className="container">
            <div className="bottom-inner p_relative">
              <div className="copyright"><p> Copyright © 2024 by <Link to={`/`}>HANS BUILDERS</Link>. All Rights Reserved By <a href="https://www.digiindiasolutions.com/" target="_blank">DIGI INDIA SOLUTIONS</a></p></div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer