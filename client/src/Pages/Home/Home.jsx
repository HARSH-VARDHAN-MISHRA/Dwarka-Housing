import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Services from '../../components/Services/Services';
import Testimonial from '../../components/Testimonial/Testimonial';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedType, setSelectedType] = useState('Rent');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSubLocation, setSelectedSubLocation] = useState('');
  const [propertyCategories, setPropertyCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Added state for selected category

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch property types
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/properties/types`)
      .then(response => {
        if (response.data.success) {
          setPropertyTypes(response.data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching property types:', error);
      });

    // Fetch locations
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-location`)
      .then(response => {
        if (response.data.success) {
          setLocations(response.data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });

    // Fetch property categories
    fetchPropertyCategories();
  }, []);

  const fetchPropertyCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-property-category`);
      if (response.data.success) {
        setPropertyCategories(response.data.data);
        setSelectedCategory(response.data.data[0]); // Default to the first category
      } else {
        console.error('Failed to load property categories');
      }
    } catch (error) {
      console.error('Error fetching property categories:', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?type=${selectedType}&state=${selectedLocation}&locality=${selectedSubLocation}&category=${selectedCategory}`);
  };

  return (
    <>
      <section className="banner__one p_relative">
        {/* Banner and other content */}
        <div className="banner__one__content">
          <div className="banner__one__left">
            <div className="banner__tab__section">
              <div className="tabs-box">
                <div className="tab-btn-box p_relative">
                  <ul className="tab-btns tab-buttons clearfix">
                    {propertyCategories.map((category, index) => (
                      <li
                        key={index}
                        className={`tab-btn ${selectedCategory === category ? 'active-btn' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span className="tab___all">{category}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tabs-content wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                  <div className="tab active-tab" id="tab-2">
                    <div className="inner-box">
                      <div className="property__form">
                        <form onSubmit={handleSearch} className="reserve-form">
                          {/* Location, Sub Location, and Property Type Selects */}
                          <div className="form-group">
                            <div className="top__title">
                              <div className="icon">
                                <span className="icon-icon-33" />
                              </div>
                              <label>Location</label>
                            </div>
                            <select
                              className="wide"
                              value={selectedLocation}
                              onChange={(e) => setSelectedLocation(e.target.value)}
                            >
                              <option value="">Select State</option>
                              {locations.map(location => (
                                <option key={location._id} value={location.state}>
                                  {location.state}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="form-group">
                            <div className="top__title">
                              <div className="icon">
                                <span className="icon-icon-33" />
                              </div>
                              <label>Sub Location</label>
                            </div>
                            <select
                              className="wide"
                              value={selectedSubLocation}
                              onChange={(e) => setSelectedSubLocation(e.target.value)}
                            >
                              <option value="">Select Locality</option>
                              {locations
                                .find(location => location.state === selectedLocation)
                                ?.locality.map((locality, index) => (
                                  <option key={index} value={locality}>
                                    {locality}
                                  </option>
                                ))}
                            </select>
                          </div>

                          <div className="form-group">
                            <div className="top__title">
                              <div className="icon">
                                <span className="icon-icon-16" />
                              </div>
                              <label>Property Type</label>
                            </div>
                            <select
                              className="wide"
                              value={selectedType}
                              onChange={(e) => setSelectedType(e.target.value)}
                            >
                              {propertyTypes.map((type, index) => (
                                <option key={index} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="form-group message-btn centred">
                            <button type="submit" className="theme-btn-one">
                              <span className="icon-57" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Additional banner content */}
          </div>
          {/* Banner right side */}
        </div>
      </section>

      <section className="property-list see__pad my-5 ">
        <div className="container">
          <div className="sec-title mb-5 text-center">
            <div className="sub__title">
              <span>Our Properties</span>
            </div>
            <h2>Our <span> Property </span> </h2>
          </div>
        </div>
      </section>

      <Services />
      <Testimonial />
    </>
  );
}

export default Home;
