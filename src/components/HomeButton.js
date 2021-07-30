import React from 'react';
import {  Link } from "react-router-dom";
import "./Afe.css";

export const HomeButton = () => {

    return (
        <div>
            <Link to="/"><button className="home__button">Go Home</button></Link>
        </div>
    )
}
