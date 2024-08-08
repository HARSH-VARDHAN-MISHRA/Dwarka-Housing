import React from 'react'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Counter from '../../components/Counter/Counter'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>


      <section className="banner__one p_relative">
        <div className="image-layer-01" style={{ backgroundImage: 'url(assets/images/shape/shape-01.png)' }} />
        <div className="image-layer-02" style={{ backgroundImage: 'url(assets/images/shape/shape-02.png)' }} />
        <div className="anim-icon">
          <div className="icon icon-01 float-bob-y" style={{ backgroundImage: 'url(assets/images/icons/icon-01.svg)' }} />
          <div className="icon icon-02 float-bob-x" style={{ backgroundImage: 'url(assets/images/icons/icon-02.svg)' }} />
          <div className="icon icon-03 float-bob-y" style={{ backgroundImage: 'url(assets/images/icons/icon-03.svg)' }} />
          <div className="icon icon-04" style={{ backgroundImage: 'url(assets/images/icons/icon-29.png)' }} />
        </div>
        <div className="banner__one__content">
          <div className="banner__one__left">
            <div className="sub__title">
              <span>Industry professional. Reliable</span>
            </div>
            <div className="main__title">
              <h1>Choose an Ideal place to <br /> reside with <span>your family.</span> </h1>
            </div>
            <div className="banner__tab__section">
              <div className="tabs-box">
                <div className="tab-btn-box p_relative">
                  <ul className="tab-btns tab-buttons clearfix">
                    <li className="tab-btn" data-tab="#tab-1">
                      <span className="tab___all"> Sell </span>
                    </li>
                    <li className="tab-btn active-btn" data-tab="#tab-2">
                      <span className="tab___all"> Buy </span>
                    </li>
                  </ul>
                </div>
                <div className="tabs-content wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                  <div className="tab" id="tab-1">
                    <div className="inner-box">
                      <div className="property__form">
                        <form action="index.html" method="post" className="reserve-form">
                          <div className=" form-group">
                            <div className="top__title">
                              <div className="icon">
                                <span className="icon-icon-33" />
                              </div>
                              <label>Location</label>
                            </div>
                            <select className="wide" style={{ display: 'none' }}>
                              <option data-display="Grad Ave, Los Angeles">Grad Ave, Los Angeles</option>
                              <option value="New York">New York</option>
                              <option value="California">California</option>
                              <option value="London">London</option>
                              <option value="Maxico">Maxico</option>
                            </select>
                            <div className="nice-select wide" tabIndex={0}>
                              <span className="current">Grad Ave, Los Angeles</span>
                              <ul className="list">
                                <li data-value="Grad Ave, Los Angeles" data-display="Grad Ave, Los Angeles" className="option selected">Grad Ave, Los Angeles</li>
                                <li data-value="New York" className="option">New York</li>
                                <li data-value="California" className="option">California</li>
                                <li data-value="London" className="option">London</li>
                                <li data-value="Maxico" className="option">Maxico</li>
                              </ul>
                            </div>
                          </div>
                          <div className=" form-group">
                            <div className="top__title">
                              <div className="icon">
                                <span className="icon-icon-16" />
                              </div>
                              <label>Property Type</label>
                            </div>
                            <select className="wide" style={{ display: 'none' }}>
                              <option data-display="Grad Ave, Los Angeles">Apartment,Family House</option>
                              <option value="Laxury">Laxury</option>
                              <option value="Classic">Classic</option>
                              <option value="Modern">Modern</option>
                              <option value="New">New</option>
                            </select>
                            <div className="nice-select wide" tabIndex={0}>
                              <span className="current">Grad Ave, Los Angeles</span>
                              <ul className="list">
                                <li data-value="Grad Ave, Los Angeles" data-display="Grad Ave, Los Angeles" className="option selected">Grad Ave, Los Angeles</li>
                                <li data-value="Laxury" className="option">Laxury</li>
                                <li data-value="Classic" className="option">Classic</li>
                                <li data-value="Modern" className="option">Modern</li>
                                <li data-value="New" className="option">New</li>
                              </ul>
                            </div>
                          </div>
                          <div className=" form-group">
                            <div className="top__title">
                              <div className="icon">
                                <span className="icon-icon-44" />
                              </div>
                              <label>Price</label>
                            </div>
                            <select className="wide" style={{ display: 'none' }}>
                              <option data-display="$1200 - $1400">$1200 - $1400</option>
                              <option value="$200 - $100">$200 - $100</option>
                              <option value="$2100 - $1100">$2100 - $1100</option>
                              <option value="$2200 - $2100">$2200 - $2100</option>
                              <option value="$2010 - $1020">$2010 - $1020</option>
                            </select>
                            <div className="nice-select wide" tabIndex={0}>
                              <span className="current">$1200 - $1400</span>
                              <ul className="list">
                                <li data-value="$1200 - $1400" data-display="$1200 - $1400" className="option selected">$1200 - $1400</li>
                                <li data-value="$200 - $100" className="option">$200 - $100</li>
                                <li data-value="$2100 - $1100" className="option">$2100 - $1100</li>
                                <li data-value="$2200 - $2100" className="option">$2200 - $2100</li>
                                <li data-value="$2010 - $1020" className="option">$2010 - $1020</li>
                              </ul>
                            </div>
                          </div>
                          <div className=" form-group message-btn centred">
                            <button type="submit" className="theme-btn-one"><span className="icon-57" /></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="tab active-tab" id="tab-2">
                    <div className="inner-box">
                      <div className="property__form">
                        <form action="index.html" method="post" className="reserve-form">
                          <div className=" form-group">
                            <div className="top__title">
                              <div className="icon">
                                <span className="icon-icon-33" />
                              </div>
                              <label>Location</label>
                            </div>
                            <select className="wide" style={{ display: 'none' }}>
                              <option data-display="Grad Ave, Los Angeles">Grad Ave, Los Angeles</option>
                              <option value="New York">New York</option>
                              <option value="California">California</option>
                              <option value="London">London</option>
                              <option value="Maxico">Maxico</option>
                            </select>
                            <div className="nice-select wide" tabIndex={0}>
                              <span className="current">Grad Ave, Los Angeles</span>
                              <ul className="list">
                                <li data-value="Grad Ave, Los Angeles" data-display="Grad Ave, Los Angeles" className="option selected">Grad Ave, Los Angeles</li>
                                <li data-value="New York" className="option">New York</li>
                                <li data-value="California" className="option">California</li>
                                <li data-value="London" className="option">London</li>
                                <li data-value="Maxico" className="option">Maxico</li>
                              </ul>
                            </div>
                          </div>
                          <div className=" form-group">
                            <div className="top__title">
                              <div className="icon">
                                <span className="icon-icon-16" />
                              </div>
                              <label>Property Type</label>
                            </div>
                            <select className="wide" style={{ display: 'none' }}>
                              <option data-display="Grad Ave, Los Angeles">Grad Ave, Los Angeles</option>
                              <option value="Laxury">Laxury</option>
                              <option value="Classic">Classic</option>
                              <option value="Modern">Modern</option>
                              <option value="New">New</option>
                            </select>
                            <div className="nice-select wide" tabIndex={0}>
                              <span className="current">Grad Ave, Los Angeles</span>
                              <ul className="list">
                                <li data-value="Grad Ave, Los Angeles" data-display="Grad Ave, Los Angeles" className="option selected">Grad Ave, Los Angeles</li>
                                <li data-value="Laxury" className="option">Laxury</li>
                                <li data-value="Classic" className="option">Classic</li>
                                <li data-value="Modern" className="option">Modern</li>
                                <li data-value="New" className="option">New</li>
                              </ul>
                            </div>
                          </div>
                          <div className=" form-group">
                            <div className="top__title">
                              <div className="icon">
                                <span className="icon-icon-44" />
                              </div>
                              <label>Price</label>
                            </div>
                            <select className="wide" style={{ display: 'none' }}>
                              <option data-display="$1200 - $1400">$1200 - $1400</option>
                              <option value="$200 - $100">$200 - $100</option>
                              <option value="$2100 - $1100">$2100 - $1100</option>
                              <option value="$2200 - $2100">$2200 - $2100</option>
                              <option value="$2010 - $1020">$2010 - $1020</option>
                            </select>
                            <div className="nice-select wide" tabIndex={0}>
                              <span className="current">$1200 - $1400</span>
                              <ul className="list">
                                <li data-value="$1200 - $1400" data-display="$1200 - $1400" className="option selected">$1200 - $1400</li>
                                <li data-value="$200 - $100" className="option">$200 - $100</li>
                                <li data-value="$2100 - $1100" className="option">$2100 - $1100</li>
                                <li data-value="$2200 - $2100" className="option">$2200 - $2100</li>
                                <li data-value="$2010 - $1020" className="option">$2010 - $1020</li>
                              </ul>
                            </div>
                          </div>
                          <div className=" form-group message-btn centred">
                            <button type="submit" className="theme-btn-one"><span className="icon-57" /></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="apartment_number">
              <h5>We have more than <span>12,000</span> apartments and places to choose from.</h5>
            </div>
            <div className="banner__botom__section">
              <div className="bottom__content">
                <div className="content__block">
                  <img src="assets/images/banner/author-01.png" alt />
                  <img src="assets/images/banner/author-02.png" alt />
                  <img src="assets/images/banner/author-03.png" alt />
                </div>
                <div className="content__block">
                  <p>1k+ People</p>
                  <p>Successfully Getting House</p>
                </div>
                <div className="content__block">
                  <div className="logo__image">
                    <img src="assets/images/banner/banner-one-logo.png" alt />
                  </div>
                  <p>Excellent <span>50,000+</span> reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner__one__right">
            <div className="image__two">
              <figure className="image-box wow slideInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'slideInUp' }}><img src="assets/images/banner/banner-02.jpg" alt /></figure>
            </div>
            <div className="image__one">
              <figure className="image-box wow slideInUp animated animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'slideInUp' }}><img src="assets/images/banner/banner-01.jpg" alt /></figure>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Services />


      {/* <!-- propertiest-two --> */}
      <section className="propertiest__section two p_relative">
        <div className="propertiest__contents see__pad">
          <div className="anim-icon">
            <div className="icon icon-01 float-bob-y" style={{ backgroundImage: 'url(assets/images/icons/icon-18.svg)' }} />
          </div>
          <div className="sec-title text-center">
            <div className="sub__title">
              <span>Our Propertiest</span>
            </div>
            <h2>Featured <span> Listings </span> </h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 pt-30">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="property-details.html">
                        <img src="assets/images/feature/feature-1.png" alt />
                      </a>
                    </figure>
                    <div className="image__icon__box">
                      <ul className="image__icon clearfix">
                        <li> <a href="propertypropertyproperty.html"><span className="icon-icon-31" /></a></li>
                        <li><a href="propertypropertyproperty.html"> <span className="icon-icon-02" /></a></li>
                        <li><a href="compare-details.html"> <span className="icon-icon-24" /></a></li>
                        <li><a href="assets/images/feature/features-1.png" className="lightbox-image p_relative" data-fancybox="gallery"><span className="icon-icon-47" /></a></li>
                      </ul>
                    </div>
                    <div className="price__section">
                      <div className="price">
                        <span>$25,235.00 / <span className="year">yr</span> </span>
                      </div>
                      <div className="img__count">
                        <span className="icon-icon-25" />
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="review__section">
                      <div className="review">
                        <p><span className="icon-icon-43" /> <span className="font__bold">5.0</span> <span> (30 Reviews)</span> </p>
                      </div>
                      <div className="catagory">
                        <span>Residentails</span>
                      </div>
                    </div>
                    <div className="properties__title">
                      <h4> <a href="property-details.html">Ready Resort for Sell</a> </h4>
                    </div>
                    <ul className="more__details">
                      <li><span className="icon-icon-04" />03</li>
                      <li><span className="icon-icon-05" />02</li>
                      <li><span className="icon-icon-42" /> 600 Sq Ft</li>
                      <li><span className="icon-icon-34" />2</li>
                    </ul>
                    <div className="author-info ">
                      <div className="author">
                        <figure className="author-thumb"><img src="assets/images/feature/author-1.png" alt /></figure>
                        <span>Annette Black</span>
                      </div>
                      <div className="view__btn">
                        <a href="property-details.html">View Details <span className="icon-57" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 pt-30">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="property-details.html">
                        <img src="assets/images/feature/feature-2.png" alt />
                      </a>
                    </figure>
                    <div className="image__icon__box">
                      <ul className="image__icon clearfix">
                        <li> <a href="propertyproperty.html"><span className="icon-icon-31" /></a></li>
                        <li><a href="propertyproperty.html"> <span className="icon-icon-02" /></a></li>
                        <li><a href="compare-details.html"> <span className="icon-icon-24" /></a></li>
                        <li><a href="assets/images/feature/features-2.png" className="lightbox-image p_relative" data-fancybox="gallery"><span className="icon-icon-47" /></a></li>
                      </ul>
                    </div>
                    <div className="price__section">
                      <div className="price">
                        <span>$25,235.00 / <span className="year">yr</span> </span>
                      </div>
                      <div className="img__count">
                        <span className="icon-icon-25" />
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="review__section">
                      <div className="review">
                        <p><span className="icon-icon-43" /> <span className="font__bold">5.0</span> <span> (30 Reviews)</span> </p>
                      </div>
                      <div className="catagory">
                        <span>Residentails</span>
                      </div>
                    </div>
                    <div className="properties__title">
                      <h4> <a href="property-details.html">Shop For Rent Eaton Centre</a> </h4>
                    </div>
                    <ul className="more__details">
                      <li><span className="icon-icon-04" />03</li>
                      <li><span className="icon-icon-05" />02</li>
                      <li><span className="icon-icon-42" /> 600 Sq Ft</li>
                      <li><span className="icon-icon-34" />2</li>
                    </ul>
                    <div className="author-info ">
                      <div className="author">
                        <figure className="author-thumb"><img src="assets/images/feature/author-2.png" alt /></figure>
                        <span>Annette Black</span>
                      </div>
                      <div className="view__btn">
                        <a href="property-details.html">View Details <span className="icon-57" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 pt-30">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="property-details.html">
                        <img src="assets/images/feature/feature-3.png" alt />
                      </a>
                    </figure>
                    <div className="image__icon__box">
                      <ul className="image__icon clearfix">
                        <li> <a href="property.html"><span className="icon-icon-31" /></a></li>
                        <li><a href="property.html"> <span className="icon-icon-02" /></a></li>
                        <li><a href="compare-details.html"> <span className="icon-icon-24" /></a></li>
                        <li><a href="assets/images/feature/features-3.png" className="lightbox-image p_relative" data-fancybox="gallery"><span className="icon-icon-47" /></a></li>
                      </ul>
                    </div>
                    <div className="price__section">
                      <div className="price">
                        <span>$25,235.00 / <span className="year">yr</span> </span>
                      </div>
                      <div className="img__count">
                        <span className="icon-icon-25" />
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="review__section">
                      <div className="review">
                        <p><span className="icon-icon-43" /> <span className="font__bold">5.0</span> <span> (30 Reviews)</span> </p>
                      </div>
                      <div className="catagory">
                        <span>Residentails</span>
                      </div>
                    </div>
                    <div className="properties__title">
                      <h4> <a href="property-details.html">Modern Villa For Rent</a> </h4>
                    </div>
                    <ul className="more__details">
                      <li><span className="icon-icon-04" />03</li>
                      <li><span className="icon-icon-05" />02</li>
                      <li><span className="icon-icon-42" /> 600 Sq Ft</li>
                      <li><span className="icon-icon-34" />2</li>
                    </ul>
                    <div className="author-info ">
                      <div className="author">
                        <figure className="author-thumb"><img src="assets/images/feature/author-3.png" alt /></figure>
                        <span>Annette Black</span>
                      </div>
                      <div className="view__btn">
                        <a href="property-details.html">View Details <span className="icon-57" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 pt-30">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="property-details.html">
                        <img src="assets/images/feature/feature-4.png" alt />
                      </a>
                    </figure>
                    <div className="image__icon__box">
                      <ul className="image__icon clearfix">
                        <li> <a href="property.html"><span className="icon-icon-31" /></a></li>
                        <li><a href="property.html"> <span className="icon-icon-02" /></a></li>
                        <li><a href="compare-details.html"> <span className="icon-icon-24" /></a></li>
                        <li><a href="assets/images/feature/features-4.png" className="lightbox-image p_relative" data-fancybox="gallery"><span className="icon-icon-47" /></a></li>
                      </ul>
                    </div>
                    <div className="price__section">
                      <div className="price">
                        <span>$25,235.00 / <span className="year">yr</span> </span>
                      </div>
                      <div className="img__count">
                        <span className="icon-icon-25" />
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="review__section">
                      <div className="review">
                        <p><span className="icon-icon-43" /> <span className="font__bold">5.0</span> <span> (30 Reviews)</span> </p>
                      </div>
                      <div className="catagory">
                        <span>Residentails</span>
                      </div>
                    </div>
                    <div className="properties__title">
                      <h4> <a href="property-details.html">Fortune Condo Town</a> </h4>
                    </div>
                    <ul className="more__details">
                      <li><span className="icon-icon-04" />03</li>
                      <li><span className="icon-icon-05" />02</li>
                      <li><span className="icon-icon-42" /> 600 Sq Ft</li>
                      <li><span className="icon-icon-34" />2</li>
                    </ul>
                    <div className="author-info ">
                      <div className="author">
                        <figure className="author-thumb"><img src="assets/images/feature/author-4.png" alt /></figure>
                        <span>Annette Black</span>
                      </div>
                      <div className="view__btn">
                        <a href="property-details.html">View Details <span className="icon-57" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 pt-30">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="property-details.html">
                        <img src="assets/images/feature/feature-13.png" alt />
                      </a>
                    </figure>
                    <div className="image__icon__box">
                      <ul className="image__icon clearfix">
                        <li> <a href="property.html"><span className="icon-icon-31" /></a></li>
                        <li><a href="property.html"> <span className="icon-icon-02" /></a></li>
                        <li><a href="compare-details.html"> <span className="icon-icon-24" /></a></li>
                        <li><a href="assets/images/feature/features-13.png" className="lightbox-image p_relative" data-fancybox="gallery"><span className="icon-icon-47" /></a></li>
                      </ul>
                    </div>
                    <div className="price__section">
                      <div className="price">
                        <span>$25,235.00 / <span className="year">yr</span> </span>
                      </div>
                      <div className="img__count">
                        <span className="icon-icon-25" />
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="review__section">
                      <div className="review">
                        <p><span className="icon-icon-43" /> <span className="font__bold">5.0</span> <span> (30 Reviews)</span> </p>
                      </div>
                      <div className="catagory">
                        <span>Family</span>
                      </div>
                    </div>
                    <div className="properties__title">
                      <h4> <a href="property-details.html">Ready Resort for Sell</a> </h4>
                    </div>
                    <ul className="more__details">
                      <li><span className="icon-icon-04" />03</li>
                      <li><span className="icon-icon-05" />02</li>
                      <li><span className="icon-icon-42" /> 600 Sq Ft</li>
                      <li><span className="icon-icon-34" />2</li>
                    </ul>
                    <div className="author-info ">
                      <div className="author">
                        <figure className="author-thumb"><img src="assets/images/feature/author-1.png" alt /></figure>
                        <span>Annette Black</span>
                      </div>
                      <div className="view__btn">
                        <a href="property-details.html">View Details <span className="icon-57" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 pt-30">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="property-details.html">
                        <img src="assets/images/feature/feature-22.png" alt />
                      </a>
                    </figure>
                    <div className="image__icon__box">
                      <ul className="image__icon clearfix">
                        <li> <a href="property.html"><span className="icon-icon-31" /></a></li>
                        <li><a href="property.html"> <span className="icon-icon-02" /></a></li>
                        <li><a href="compare-details.html"> <span className="icon-icon-24" /></a></li>
                        <li><a href="assets/images/feature/features-22.png" className="lightbox-image p_relative" data-fancybox="gallery"><span className="icon-icon-47" /></a></li>
                      </ul>
                    </div>
                    <div className="price__section">
                      <div className="price">
                        <span>$25,235.00 / <span className="year">yr</span> </span>
                      </div>
                      <div className="img__count">
                        <span className="icon-icon-25" />
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="review__section">
                      <div className="review">
                        <p><span className="icon-icon-43" /> <span className="font__bold">5.0</span> <span> (30 Reviews)</span> </p>
                      </div>
                      <div className="catagory">
                        <span>Family</span>
                      </div>
                    </div>
                    <div className="properties__title">
                      <h4> <a href="property-details.html">Shop For Rent Eaton Centre</a> </h4>
                    </div>
                    <ul className="more__details">
                      <li><span className="icon-icon-04" />03</li>
                      <li><span className="icon-icon-05" />02</li>
                      <li><span className="icon-icon-42" /> 600 Sq Ft</li>
                      <li><span className="icon-icon-34" />2</li>
                    </ul>
                    <div className="author-info ">
                      <div className="author">
                        <figure className="author-thumb"><img src="assets/images/feature/author-2.png" alt /></figure>
                        <span>Annette Black</span>
                      </div>
                      <div className="view__btn">
                        <a href="property-details.html">View Details <span className="icon-57" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Counter/> */}
      <Testimonial/>

      <section className="blog__section__two see__pad">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub__title">
              <span>What’s New Trending</span>
            </div>
            <h2>Latest Blog <span> &amp; Posts</span> </h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12 pb-30">
              <div className="news__block__one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-04.png" alt />
                      </a>
                    </figure>
                  </div>
                  <div className="lower__content">
                    <div className="author__info">
                      <ul>
                        <li>
                          <a href="#"><span className="icon-icon-22" /> Authore</a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-icon-23" /> 11 Setember, 2022</a>
                        </li>
                      </ul>
                    </div>
                    <div className="news__title">
                      <h3> <a href="blog-details.html"> Develop Relationships With Human Resource Consectetur</a></h3>
                    </div>
                    <div className="news__text">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, esse.</p>
                    </div>
                    <div className="more__btn">
                      <a href="blog-details.html">Read More <span className="icon-57" /> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 pb-30">
              <div className="news__block__one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-05.png" alt />
                      </a>
                    </figure>
                  </div>
                  <div className="lower__content">
                    <div className="author__info">
                      <ul>
                        <li>
                          <a href="#"><span className="icon-icon-22" /> Authore</a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-icon-23" /> 02 Setember, 2022</a>
                        </li>
                      </ul>
                    </div>
                    <div className="news__title">
                      <h3> <a href="blog-details.html"> Relationships With this Consectetur Resource Man. </a></h3>
                    </div>
                    <div className="news__text">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, esse.</p>
                    </div>
                    <div className="more__btn">
                      <a href="blog-details.html">Read More <span className="icon-57" /> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 pb-30">
              <div className="news__block__one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="blog-details.html">
                        <img src="assets/images/news/news-06.png" alt />
                      </a>
                    </figure>
                  </div>
                  <div className="lower__content">
                    <div className="author__info">
                      <ul>
                        <li>
                          <a href="#"><span className="icon-icon-22" /> Authore</a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-icon-23" /> 20 Setember, 2022</a>
                        </li>
                      </ul>
                    </div>
                    <div className="news__title">
                      <h3> <a href="blog-details.html"> Sevelop Relationships Consectetur Human Resource. </a></h3>
                    </div>
                    <div className="news__text">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, esse.</p>
                    </div>
                    <div className="more__btn">
                      <a href="blog-details.html">Read More <span className="icon-57" /> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home