import React, { useEffect } from 'react'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Counter from '../../components/Counter/Counter'
import Testimonial from '../../components/Testimonial/Testimonial'
import { Link } from 'react-router-dom'


const propertiesData = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNQra1sdsf-K6UUd6MW4kCz7ds5iscYQ6Ww&s',
    detailsLink: 'property/detail',
    price: '₹25,235.00',
    period: 'yr',
    category: 'Residentials',
    title: 'Ready Resort for Sell',
    details: ['03', '02', '600 Sq Ft', '2'],

  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yTPYnP18dd01BjwbyB6cyeSJ1QqJzFLCZw&s',
    detailsLink: 'property/detail',
    price: '₹25,235.00',
    period: 'yr',
    category: 'Residentials',
    title: 'Shop For Rent Eaton Centre',
    details: ['03', '02', '600 Sq Ft', '2'],

  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXvmtstIw5lLFbNnQ4I0Ev3CH1j6nrtcygA&s',
    detailsLink: 'property/detail',
    price: '₹25,235.00',
    period: 'yr',
    category: 'Residentials',
    title: 'Modern Villa For Rent',
    details: ['03', '02', '600 Sq Ft', '2'],

  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNQra1sdsf-K6UUd6MW4kCz7ds5iscYQ6Ww&s',
    detailsLink: 'property/detail',
    price: '₹25,235.00',
    period: 'yr',
    category: 'Residentials',
    title: 'Fortune Condo Town',
    details: ['03', '02', '600 Sq Ft', '2'],

  },
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNQra1sdsf-K6UUd6MW4kCz7ds5iscYQ6Ww&s',
    detailsLink: 'property/detail',
    price: '₹25,235.00',
    period: 'yr',
    category: 'Residentials',
    title: 'Ready Resort for Sell',
    details: ['03', '02', '600 Sq Ft', '2'],

  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yTPYnP18dd01BjwbyB6cyeSJ1QqJzFLCZw&s',
    detailsLink: 'property/detail',
    price: '₹25,235.00',
    period: 'yr',
    category: 'Residentials',
    title: 'Shop For Rent Eaton Centre',
    details: ['03', '02', '600 Sq Ft', '2'],

  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXvmtstIw5lLFbNnQ4I0Ev3CH1j6nrtcygA&s',
    detailsLink: 'property/detail',
    price: '₹25,235.00',
    period: 'yr',
    category: 'Residentials',
    title: 'Modern Villa For Rent',
    details: ['03', '02', '600 Sq Ft', '2'],

  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNQra1sdsf-K6UUd6MW4kCz7ds5iscYQ6Ww&s',
    detailsLink: 'property/detail',
    price: '₹25,235.00',
    period: 'yr',
    category: 'Residentials',
    title: 'Fortune Condo Town',
    details: ['03', '02', '600 Sq Ft', '2'],

  },
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNQra1sdsf-K6UUd6MW4kCz7ds5iscYQ6Ww&s',
    detailsLink: 'property/detail',
    price: '₹25,235.00',
    period: 'yr',
    category: 'Residentials',
    title: 'Ready Resort for Sell',
    details: ['03', '02', '600 Sq Ft', '2'],

  }
];


const newsItems = [
  {
    id: 1,
    image: 'https://assets-news.housing.com/news/wp-content/uploads/2022/09/14152436/DDA-Housing-Scheme-2022-shutterstock_1140375443-1200x700-compressed.jpg',
    link: '/',
    author: 'Rajeev Singh',
    date: '11 September, 2022',
    title: 'Develop Relationships With Human Resource Consectetur',
    excerpt: 'Discover the latest trends and strategies for building strong relationships in human resources. Learn effective techniques and insights.'
  },
  {
    id: 2,
    image: 'https://housing.com/news/wp-content/uploads/2024/06/Desk-setup-ideas-for-creative-people-t.jpg',
    link: '/',
    author: 'Akash Gupta',
    date: '5 October, 2022',
    title: 'Top Real Estate Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with the latest real estate trends. Explore what’s coming in 2023 and how it impacts your property decisions.'
  },
  {
    id: 3,
    image: 'https://assets-news.housing.com/news/wp-content/uploads/2017/12/24193612/How-to-apply-for-MHADA-Lottery-Scheme-Thumbnail-300x200-compressed.jpg',
    link: '/',
    author: 'Rajeev Singh',
    date: '11 September, 2022',
    title: 'Develop Relationships With Human Resource Consectetur',
    excerpt: 'Discover the latest trends and strategies for building strong relationships in human resources. Learn effective techniques and insights.'
  }
];


const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
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
                      <span className="tab___all"> Rent </span>
                    </li>
                    <li className="tab-btn active-btn" data-tab="#tab-2">
                      <span className="tab___all"> Buy </span>
                    </li>
                  </ul>
                </div>
                <div className="tabs-content wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>

                  {/* <div className="tab" id="tab-2">
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
                              <span className="current">Delhi</span>
                              <ul className="list">
                                <li data-value="Delhi" data-display="Delhi" className="option selected">Delhi</li>
                                <li data-value="Delhi" className="option">Delhi</li>
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
                  </div> */}

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
                              <span className="current">Delhi</span>
                              <ul className="list">
                                <li data-value="Delhi" data-display="Delhi" className="option selected">Delhi</li>
                                <li data-value="Mumbai" className="option">Mumbai</li>
                                <li data-value="Bengaluru" className="option">Bengaluru</li>
                                <li data-value="Kolkata" className="option">Kolkata</li>
                                <li data-value="Chennai" className="option">Chennai</li>
                                <li data-value="Hyderabad" className="option">Hyderabad</li>
                                <li data-value="Pune" className="option">Pune</li>
                                <li data-value="Ahmedabad" className="option">Ahmedabad</li>
                                <li data-value="Jaipur" className="option">Jaipur</li>
                                <li data-value="Chandigarh" className="option">Chandigarh</li>
                                <li data-value="Surat" className="option">Surat</li>
                                <li data-value="Lucknow" className="option">Lucknow</li>
                                <li data-value="Kanpur" className="option">Kanpur</li>
                                <li data-value="Nagpur" className="option">Nagpur</li>
                                <li data-value="Indore" className="option">Indore</li>

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
                              <option data-display="Laxury">Laxury</option>
                              <option value="Laxury">Laxury</option>
                              <option value="Classic">Classic</option>
                              <option value="Modern">Modern</option>
                              <option value="New">New</option>
                            </select>
                            <div className="nice-select wide" tabIndex={0}>
                              <span className="current">Laxury</span>
                              <ul className="list">
                                <li data-value="Laxury" data-display="Laxury" className="option selected">Laxury</li>
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
                              <option data-display="₹99,600 - ₹116,200">₹99,600 - ₹116,200</option>
                              <option value="₹16,600 - ₹8,300">₹16,600 - ₹8,300</option>
                              <option value="₹174,300 - ₹91,300">₹174,300 - ₹91,300</option>
                              <option value="₹182,600 - ₹174,300">₹182,600 - ₹174,300</option>
                              <option value="₹167,430 - ₹84,660">₹167,430 - ₹84,660</option>
                            </select>
                            <div className="nice-select wide" tabIndex={0}>
                              <span className="current">₹99,600 - ₹116,200</span>
                              <ul className="list">
                                <li data-value="₹99,600 - ₹116,200" data-display="₹99,600 - ₹116,200" className="option selected">₹99,600 - ₹116,200</li>
                                <li data-value="₹16,600 - ₹8,300" className="option">₹16,600 - ₹8,300</li>
                                <li data-value="₹174,300 - ₹91,300" className="option">₹174,300 - ₹91,300</li>
                                <li data-value="₹182,600 - ₹174,300" className="option">₹182,600 - ₹174,300</li>
                                <li data-value="₹167,430 - ₹84,660" className="option">₹167,430 - ₹84,660</li>
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
                  <img src="https://avatars.githubusercontent.com/u/138967484?v=4" alt />
                  <img src="https://avatars.githubusercontent.com/u/145193630?v=4" alt />
                  <img src="https://avatars.githubusercontent.com/u/138967484?v=4" alt />
                </div>
                <div className="content__block">
                  <p>1k+ People</p>
                  <p>Successfully Getting House</p>
                </div>
                <div className="content__block">
                  <div className="logo__image">
                    <img src="assets/images/banner/banner-one-logo.png" alt />
                  </div>
                  <p>Excellent <span>100+</span> reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner__one__right">
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

              {propertiesData.map((property) => (
                <div className="col-lg-4 col-md-6 col-sm-6 pb-30" key={property.id}>
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link to={property.detailsLink}>
                          <img src={property.image} alt={property.title} />
                        </Link>
                      </figure>
                      <div className="image__icon__box">
                        <ul className="image__icon clearfix">
                          <li> <Link ><span className="icon-icon-31" /></Link></li>
                          <li><Link > <span className="icon-icon-02" /></Link></li>
                          <li><a href={property.image} className="lightbox-image p_relative" data-fancybox="gallery"><span className="icon-icon-47" /></a></li>
                        </ul>
                      </div>
                      <div className="price__section">
                        <div className="price">
                          <span>{property.price} / <span className="year">{property.period}</span> </span>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="review__section">
                        <div></div>
                        <div className="catagory">
                          <span>{property.category}</span>
                        </div>
                      </div>
                      <div className="properties__title">
                        <h4> <Link to={property.detailsLink}>{property.title}</Link> </h4>
                      </div>
                      <ul className="more__details">
                        {property.details.map((detail, index) => (
                          <li key={index}><span className={`icon-icon-0${index + 4}`} />{detail}</li>
                        ))}
                      </ul>
                      <div className="author-info">
                        <div className="view__btn">
                          <Link to={property.detailsLink} className='h5'>View Details <span className="icon-57" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link to={`/properties`} className="common-btn btn__two">
                View More <i className="icon-icon-51" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* <Counter/> */}
      <Testimonial />

      <section className="blog__section__two see__pad">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub__title">
              <span>What’s New Trending</span>
            </div>
            <h2>Latest Blog <span> &amp; Posts</span> </h2>
          </div>
          <div className="row">
            {newsItems.map((item) => (
              <div className="col-xl-4 col-lg-6 col-md-12 pb-30" key={item.id}>
                <div className="news__block__one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link to={item.link}>
                          <img src={item.image} alt={item.title} />
                        </Link>
                      </figure>
                    </div>
                    <div className="lower__content">
                      <div className="author__info">
                        <ul>
                          <li>
                            <Link to={``}><span className="icon-icon-22" /> {item.author}</Link>
                          </li>
                          <li>
                            <Link to={``}><span className="icon-icon-23" /> {item.date}</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="news__title">
                        <h3> <Link to={item.link}>{item.title}</Link></h3>
                      </div>
                      <div className="news__text">
                        <p>{item.excerpt}</p>
                      </div>
                      <div className="more__btn">
                        <Link to={item.link}>Read More <span className="icon-57" /> </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Home