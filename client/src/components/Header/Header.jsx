import React from 'react';
import logo from './logo.png';
import {Link , useLocation} from 'react-router-dom'





const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: 'about' },
  // {
  //   title: 'Property',
  //   url: '#',
  //   dropdown: [
  //     { title: 'Property', url: 'properties' },
  //     { title: 'Property Grid', url: 'property-grid' },
  //     { title: 'Property Details', url: 'property-details' },
  //   ],
  // },
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
  { title: 'Property', url: 'properties' },
  { title: 'Blog', url: 'blog' },
  { title: 'Contact Us', url: 'contact' },
];



const Header = () => {
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

  return (
    <header className={`main-header  ${isHomePage ? "style-one" : "style-three"}`}>
      {/* header-lower */}
      <div className="header-lower">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></figure>
          </div>
          <div className="menu-area">
            {/* Mobile Navigation Toggler */}
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  {navLinks.map((link, index) => (
                    <li key={index} className={link.dropdown ? 'dropdown' : ''}>
                      <a href={link.url}>{link.title}</a>
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
                {/* Keep This Empty / Menu will come through Javascript */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
