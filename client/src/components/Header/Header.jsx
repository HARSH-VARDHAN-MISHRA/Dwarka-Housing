import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';







const Header = () => {
  const [mobNav, setMobNav] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [propertyCategory, setPropertyCategory] = useState([]);

  const fetchPropertyCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-property-category`);
      if (response.data.success) {
        setPropertyCategory(response.data.data);
      } else {
        toast.error('Failed to load locations');
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
      toast.error('An error occurred while fetching locations');
    }
  };

  useEffect(() => {
    fetchPropertyCategories();
  }, [])

  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: 'about' },
    {
      title: 'Property',
      url: 'properties',
      dropdown: propertyCategory.map(category => ({
        title: category,
        url: `properties/${category.replace(/\s+/g, '-')}`
      }))
    },
    // { title: 'Blog', url: 'blog' },
    { title: 'Contact Us', url: 'contact' },
  ];

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
                    <Link to="/sign-up" className="btn-1">
                      Add your Property
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
              <nav className=" navbar-expand-md navbar-light">
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
