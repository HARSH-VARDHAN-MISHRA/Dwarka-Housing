import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'

const AboutPage = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    },[])
    return (
        <>
            {/* ----- BreadCrumb ----    */}
            <section className="page__title p_relative">
                <div className="bg-layer parallax-bg" data-parallax="{&quot;y&quot;: 20}" style={{ backgroundImage: 'url(assets/images/resource/page-title.png)' }}>
                </div>
                <div className="container">
                    <div className="content-box p_relative">
                        <h1 className="title">About Us</h1>
                        <ul className="bread-crumb">
                            <li><Link to={`/`}><span className="icon-icon-16" />Home</Link></li>
                            <li><span className="icon-57" />About Us</li>
                        </ul>
                    </div>
                </div>
            </section>

            <About/>
            <Services/>
            
        </>
    )
}

export default AboutPage