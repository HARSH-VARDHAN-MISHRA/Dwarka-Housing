import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <>
      {/* ----- BreadCrumb ----    */}
      <section className="page__title p_relative">
        <div className="bg-layer parallax-bg" data-parallax="{&quot;y&quot;: 20}" style={{ backgroundImage: 'url(assets/images/resource/page-title.png)' }}>
        </div>
        <div className="container">
          <div className="content-box p_relative">
            <h1 className="title">Contact Us</h1>
            <ul className="bread-crumb">
              <li><Link to={`/`}><span className="icon-icon-16" />Home</Link></li>
              <li><span className="icon-57" />Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* contact*/}
      <section className="contact__style__one see__pad">
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 info-column">
              <div className="contact-info mr_70">
                <h3>Lets talk!</h3>
                <p>Quisque vitae volutpat leo. Cras scelerisque dignissim diam, nec auctor nisl pretium eu. Sed vulputate leo ac porta eleifend. Pellentesque semper convallis lacus, </p>
                <div className="contact__info__block">
                  <div className="left__site__info">
                    <div className="contact__icon one">
                      <span className="icon-56" />
                    </div>
                  </div>
                  <div className="right__site__info one">
                    <h5>Call us</h5>
                    <a href="tel:+12345   6987   231 ">+12345   6987   231 </a>
                  </div>
                </div>
                <div className="contact__info__block">
                  <div className="left__site__info">
                    <div className="contact__icon two">
                      <span className="icon-55" />
                    </div>
                  </div>
                  <div className="right__site__info two">
                    <h5>E-mail Address</h5>
                    <a href="mailto:info@yourmail.com">info@hansbuilders.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <div className="contact___title">
                  <h3> Send us a message </h3>
                  <p>Quisque vitae volutpat leo. Cras scelerisque dignissim diam, nec auctor nisl pretium eu. Sed vulputate leo ac porta eleifend. Pellentesque semper convallis lacus, </p>
                </div>
                <form method="post" action="sendemail.php" id="contact-form">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="username" placeholder="Your Name" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 ps-xl-0 form-group">
                      <input type="email" name="email" placeholder="Your email" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea name="message" placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
                      <div className="more__buttons">
                        <button className="common-btn btn__two" type="submit" name="submit-form">Send Your Message <i className="icon-icon-51" /></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact end*/}

      {/* Map Section */}
      <section className="map-section">
        <div className="location-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6090151114627!2d77.08295547496047!3d28.73122847959285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1723139239811!5m2!1sen!2sin" width="100%" height={708} frameBorder={0} style={{ border: 0, marginBottom: '-9px', width: '100%' }} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
      </section>
      {/* End Map Section */}


    </>
  )
}

export default ContactPage