import React from 'react';
import GreetingSection from "./GreetingSection";
import AboutUs from "./AboutUs"
import Opinion from "./Opinion";
import Concat from "./Concat";


const Main = () => {
    return (
        <main>
            <GreetingSection/>
            <AboutUs/>
            <Opinion/>
            <Concat/>
        </main>
    )
}

export default Main;
