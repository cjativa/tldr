import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {

    return (
        <nav className="navigation-bar">
            <div className="navigation-bar__logo"><span>tldr.me</span></div>
            <ul className="navigation-bar__items">
                <Link to="/login"><li>Log in</li></Link>
                <Link to="/sign-up"><li>Get started</li></Link>
            </ul>
        </nav>
    )
}