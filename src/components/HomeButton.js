import React from 'react';
import {  Link } from "react-router-dom";

export const HomeButton = () => {

    return (
        <div>
            <Link to="/"><button>Go Home</button></Link>
        </div>
    )
}
