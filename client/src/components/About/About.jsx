import React from 'react'

const About = () => {
    return (
        <>
            <section className="about__section see__pad p_relative">
                <div className="anim-icon">
                    <div className="icon icon-01 float-bob-y" style={{ backgroundImage: 'url(assets/images/icons/icon-08.svg)' }} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 wow slideInUp animated animated animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'slideInUp' }}>
                            <div className="about_left_section">
                                <div className="sec-title">
                                    <div className="sub__title">
                                        <span>About</span>
                                    </div>
                                    <h2>Hans Builder <span> Properties </span> </h2>
                                </div>
                                <div className="normal__text">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi  architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                                <div className="sell__list">
                                    <ul>
                                        <li> <span className="icon-58" /> Nemo enim ipsam voluptatem quia voluptas </li>
                                        <li> <span className="icon-58" /> Live Music Cocets at Luviana </li>
                                        <li> <span className="icon-58" /> Taudantium, totam rem aperiam </li>
                                        <li> <span className="icon-58" /> Our SecretIsland Boat Tour is Just for You </li>
                                    </ul>
                                </div>
                                <div className="home__pack">
                                    <div className="service__list">
                                        <div className="icon">
                                            <span className="icon-icon-05" />
                                        </div>
                                        <div className="text">
                                            <span>3 Bedrooms</span>
                                        </div>
                                    </div>
                                    <div className="service__list">
                                        <div className="icon">
                                            <span className="icon-icon-04" />
                                        </div>
                                        <div className="text">
                                            <span>3 Bathrooms</span>
                                        </div>
                                    </div>
                                    <div className="service__list">
                                        <div className="icon">
                                            <span className="icon-icon-34" />
                                        </div>
                                        <div className="text">
                                            <span>1 Car parking</span>
                                        </div>
                                    </div>
                                    <div className="service__list">
                                        <div className="icon">
                                            <span className="icon-icon-42" />
                                        </div>
                                        <div className="text">
                                            <span>Square Ft</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 pe-xl-0 wow slideInUp animated animated animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'slideInUp' }}>
                            <div className="about_right_section pl-xl-10">
                                <div className="inner__image">
                                    <figure className="image">
                                        <img src="assets/images/resource/sell-01.png" alt />
                                    </figure>
                                </div>
                                <div className="image__section__two">
                                    <div className="inner__image">
                                        <figure className="image">
                                            <img src="assets/images/resource/sell-02.png" alt />
                                        </figure>
                                    </div>
                                    <div className="inner__image">
                                        <figure className="image">
                                            <img src="assets/images/resource/sell-03.png" alt />
                                        </figure>
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

export default About