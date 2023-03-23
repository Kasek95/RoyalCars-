import React from 'react';
import GreetingSection from "./GreetingSection";
import AboutUs from "./AboutUs"
import Opinion from "./Opinion";
import Concat from "./Concat";
import Footer from "./Footer";


const Main = () => {
    return (
        <main>
            <GreetingSection/>
            <AboutUs/>
            <Opinion/>
            <Concat/>
            <Footer/>
        </main>
    )
}

export default Main;
