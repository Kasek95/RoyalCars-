import React from 'react';
import "./greetingsection.scss"


const GreetingSection = () => {
    return (
        <section className={"home"}>
            <div className="banner-overlay"></div>
            <div className="greetingSection">
                <h1 className="banner-title">Royal Cars</h1>
                <p className="banner-text">We are a company that rents cars for events, weddings and occasional trips.</p>
                <div className="banner-buttons">
                    <a href="#" className="button button-red">Fleet of Vehicles</a>
                    <a href="#" className="button button-white">Earn with Us</a>
                </div>
            </div>
        </section>
    )
}

export default GreetingSection;
