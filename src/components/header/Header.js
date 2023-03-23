import React from 'react';
import {Link} from "react-router-dom"

import './header.scss'



function Header(props) {
    return (
        <header>

            <div className={"header_container container"}>
                <a className={"logo"} href={"#"}>Royal<span>Cars</span></a>
                <navigation className={"navigation"}>
                    <Link className={"navLink"} to={"/"}>About Us</Link>
                    <Link className={"navLink"} to={"/Fleet"}>Fleet of Vehicles</Link>
                    <Link className={"navLink"} to={"/AddVehicle"}>Add your Vehicle</Link>
                    <Link className={"navLink"} to={"/"} >Concat</Link>
                </navigation>
            </div>
        </header>
    );
}

export default Header;