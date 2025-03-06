import React from "react";
import '../../Styles/Header.css'
import Logo from '../../img/Wikipedia White Logo.png'
import { Link } from "react-router";

export default function Header({PageURL, PageName}){
    return(
        <nav className = "Header">
            <div className="Header-LogoSide">
                <Link className = "Header-LogoSide-Container" to = "/">
                    <img src = {Logo} className="Header-LogoSide-Container-Img"/>
                    <a className="Header-LogoSide-Container-SiteName"> Wiki Path </a>
                </Link>
            </div>
            <div className="Header-NavSide">
                <Link to = { PageURL } className = "Header-NavSide-Link"> { PageName }</Link>
            </div>
        </nav>
    )
}