import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader';
import formatDate from '../../components/formatDate/formatDate';

const PropertyDetailByCategory = () => {

    const { categoryName, titleName } = useParams();

    const newCategoryName = categoryName.replace(/-/g, ' ');
    const newTitleName = titleName.replace(/-/g, ' ');

    const [property, setProperty] = useState(null);

    const fetchPropertyByPropertyTitle = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/property-by-name/${newTitleName}`);
            if (response.data.success) {
                setProperty(response.data.data);
            } else {
                console.error('Failed to fetch property');
            }
        } catch (error) {
            console.error('Error fetching Property:', error);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        fetchPropertyByPropertyTitle();
    }, [categoryName, titleName]);


    return (
        <>
            <section className="page__title p_relative">
                <div className="bg-layer parallax-bg" style={{ backgroundImage: 'url(assets/images/resource/page-title.png)' }}>
                </div>
                <div className="container">
                    <div className="content-box p_relative">
                        <h1 className="title">{newTitleName}</h1>
                        <ul className="bread-crumb">
                            <li><Link to={`/`}><span className="icon-icon-16" />Home</Link></li>
                            <li><span className="icon-57" /><Link className='text-white' to={`properties/${newCategoryName.replace(/\s+/g, '-')}`}>{newCategoryName}</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            {property ? (
                <>

                    <section className="property__details pt-20 pb-140">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-12 pb-30">
                                    <div className="property__details__content">

                                        <div className="property__one pb-3">
                                            <div className="property__one__left">
                                                <h3>{property.title}</h3>
                                                <ul className="place__info">
                                                    <li><span className="icon-icon-31" /> <Link to={property.mapLink}>Location</Link></li>
                                                    <li><span className="icon-icon-23" /> {formatDate(property.createdAt)}</li>
                                                </ul>
                                            </div>
                                            <div className="property__one__right">
                                                <span className="price">₹{property.price.toLocaleString()}</span>
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                                {property.images && property.images.map((image, index) => (
                                                    <div className="col-md-4 col-sm-6 mb-2" key={index}>
                                                        <div className="property__image__box">
                                                            <img src={image} alt={`Property image ${index + 1}`} className="img-fluid" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        <div className="property__two">
                                            <div className="property__two__title">
                                                <h4>About This Property</h4>
                                            </div>
                                            <div className="property__two__content">
                                                <p>{property.description}</p>
                                            </div>
                                        </div>

                                        <div className="property__two">
                                            <div className="property__two__title">
                                                <h4>Property Type</h4>
                                            </div>
                                            <div className="property__two__content">
                                                <div className="property__type">
                                                    <div className="property__type__info">
                                                        <div className="property__type__info__list">
                                                            <div className="property__type__block">
                                                                <div className="property__type__info__content">
                                                                    <span className="text__bold">Home Area:</span>
                                                                </div>
                                                                <div className="property__type__info__content">
                                                                    <span>{property.areaSize} sqft</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="property__type__info__list">
                                                            <div className="property__type__block">
                                                                <div className="property__type__info__content">
                                                                    <span className="text__bold">Baths:</span>
                                                                </div>
                                                                <div className="property__type__info__content">
                                                                    <span>{property.bathrooms} </span>
                                                                </div>
                                                            </div>
                                                            <div className="property__type__block">
                                                                <div className="property__type__info__content">
                                                                    <span className="text__bold">Beds:</span>
                                                                </div>
                                                                <div className="property__type__info__content">
                                                                    <span>{property.bedrooms}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="property__type__info__list">
                                                            <div className="property__type__block">
                                                                <div className="property__type__info__content">
                                                                    <span className="text__bold">Year built:</span>
                                                                </div>
                                                                <div className="property__type__info__content">
                                                                    <span>{property.yearBuilt}</span>
                                                                </div>
                                                            </div>
                                                            <div className="property__type__block">
                                                                <div className="property__type__info__content">
                                                                    <span className="text__bold">Price:</span>
                                                                </div>
                                                                <div className="property__type__info__content">
                                                                    <span>₹{property.price.toLocaleString()}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="property__two">
                                            <div className="property__two__title">
                                                <h4>Location</h4>
                                            </div>
                                            <div className="property__two__content">
                                                <div className="location">
                                                    <div className="image__box p_relative">
                                                        <iframe
                                                            src={property.mapLink}
                                                            width={'100%'}
                                                            height={450}
                                                            style={{ border: 0 }}
                                                            allowFullScreen
                                                            loading="lazy"
                                                            referrerPolicy="no-referrer-when-downgrade"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-12">
                                    <div className="blog__sidebar default__sidebar">
                                        <div className="sidebar__widget about__author">
                                            <h4 className="title">Contact Owner</h4>
                                            <div className="author__info">
                                                <figure className="author__thumb">
                                                    <img src="https://avatars.githubusercontent.com/u/138967484?v=4" alt={property.vendor.name} />
                                                </figure>
                                                <div className="re__post__content">
                                                    <h5 className='mb-2'>{property.vendor.name}</h5>
                                                    <div className="team__media mb-15">
                                                        <ul>
                                                            <li><a href="#"><span className="icon-icon-35" /></a></li>
                                                            <li><a href="#"><span className="icon-icon-27" /></a></li>
                                                            <li><a href="#"><span className="icon-icon-14" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="author__text">
                                                <p>{property.vendor.description || "Contact for more details."}</p>
                                            </div>
                                        </div>

                                        {/* Latest Listings */}
                                        <div className="sidebar__widget post__widget">
                                            <div className="widget-title">
                                                <h4 className="title">Latest Listings</h4>
                                            </div>
                                            <div className="widget-content">
                                                <div className="post-inner">
                                                    {/* Assuming you have latest listings data */}
                                                    {/* {latestListings.map(listing => (
                                                        <div className="post" key={listing.id}>
                                                            <figure className="post__thumb">
                                                                <Link to={listing.link}>
                                                                    <img src={listing.imageUrl} alt={listing.title} />
                                                                </Link>
                                                            </figure>
                                                            <div className="re__post__content">
                                                                <h6><Link to={listing.link}>{listing.title}</Link></h6>
                                                                <div className="location">
                                                                    <p><span className="icon-icon-36" /> {listing.location}</p>
                                                                </div>
                                                                <div className="price__post">
                                                                    <p>₹{listing.price.toLocaleString()}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))} */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </>
            ) : (
                <Loader />
            )}
        </>
    );
}

export default PropertyDetailByCategory;
