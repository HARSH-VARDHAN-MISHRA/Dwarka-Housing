import React, { useState } from 'react';
import logo from './logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom'





const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: 'about' },
  {
    title: 'Property',
    url: 'properties',
    dropdown: [
      { title: 'Buy', url: 'properties' },
      { title: 'Rent ', url: 'properties' },
    ],
  },
  // {
  //   title: 'Pages',
  //   url: '#',
  //   dropdown: [
  //     { title: 'Gallery', url: 'gallery' },
  //     {
  //       title: 'Services',
  //       url: '#',
  //       dropdown: [
  //         { title: 'Services', url: 'services' },
  //         { title: 'Services Details', url: 'services-details' },
  //       ],
  //     },
  //     {
  //       title: 'Our Team',
  //       url: '#',
  //       dropdown: [
  //         { title: 'Our Team', url: 'team' },
  //         { title: 'Our Team Details', url: 'team-details' },
  //       ],
  //     },
  //     { title: 'FAQ', url: 'faq' },
  //   ],
  // },
  // { title: 'Property', url: 'properties' },
  { title: 'Blog', url: 'blog' },
  { title: 'Contact Us', url: 'contact' },
];



const Header = () => {
  const [mobNav, setMobNav] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const renderDropdown = (dropdown) => {
    return (
      <ul>
        {dropdown.map((item, index) => (
          <li key={index} className={item.dropdown ? 'dropdown' : ''}>
            <Link to={item.url}>{item.title}</Link>
            {item.dropdown && renderDropdown(item.dropdown)}
          </li>
        ))}
      </ul>
    );
  };

  const toggleSideMobileBar = () => {
    setMobNav(!mobNav)
  }

  return (
    <>
      <div className={` ${mobNav ? "mobile-menu-visible" : ""}`}>


        <header className={`main-header  ${isHomePage ? "style-one" : "style-three"}`}>
          {/* header-lower */}
          <div className="header-lower">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></figure>
              </div>
              <div className="menu-area">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={toggleSideMobileBar}>
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                      {navLinks.map((link, index) => (
                        <li key={index} className={link.dropdown ? 'dropdown' : ''}>
                          <Link to={link.url}>{link.title}</Link>
                          {link.dropdown && renderDropdown(link.dropdown)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="header__right">
                <div className="header__right__button">

                  <div className="header__submit__btn">
                    <Link to="contact" className="btn-1">
                      Quick Contact
                      <span />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sticky Header */}
          <div className="sticky-header">
            <div className="container">
              <div className="outer-box">
                <div className="logo-box">
                  <figure className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></figure>
                </div>
                <div className="menu-area">
                  <nav className="main-menu clearfix">
                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                      <ul className="navigation clearfix">
                        {navLinks.map((link, index) => (
                          <li key={index} className={link.dropdown ? 'dropdown' : ''}>
                            <Link to={link.url}>{link.title}</Link>
                            {link.dropdown && renderDropdown(link.dropdown)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn" onClick={toggleSideMobileBar}><i className="fas fa-times" /></div>
          <nav className="menu-box mCustomScrollbar _mCS_1 mCS_no_scrollbar">
            <div className="nav-logo">
              <Link to={`/`}><img src={logo} alt="logo" title="Hans Builders" /></Link>
            </div>
            <div className="menu-outer">
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    {navLinks.map((link, index) => (
                      <li key={index} className={link.dropdown ? 'dropdown' : ''}>
                        <Link to={link.url}>{link.title}</Link>
                        {link.dropdown && renderDropdown(link.dropdown)}
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>Plot.198, Sec 24, Pocket-9, Rohini, New Delhi, Delhi 110085</li>
                <li><a href="tel:+91987654321">+91-987654321</a></li>
                <li><a href="mailto:info@example.com">info@example.com</a></li>
              </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                <li><a href="#"><span className="fab fa-twitter" /></a></li>
                <li><a href="#"><span className="fab fa-facebook-square" /></a></li>
                <li><a href="#"><span className="fab fa-instagram" /></a></li>
                <li><a href="#"><span className="fab fa-youtube" /></a></li>
              </ul>
            </div>
          </nav>
        </div>

      </div>
    </>
  );
};

export default Header;
