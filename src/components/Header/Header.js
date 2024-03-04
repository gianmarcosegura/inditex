import React from 'react';
import './Header.css';
import logo from './../../assets/marvel_logo.png';
import heart_selected from './../../assets/heart_selected.png';
import heart_notSelected from './../../assets/heart_notSelected.png';

export const Header = ({ count = 0 }) => (
    <div className='container'>
        <img src={logo} alt='logo_marvel' />
        <div className='favourites'>
            <img src={count ? heart_selected : heart_notSelected} className='heart' alt='favourites_image' />
            { count >= 1 && count }
        </div>
    </div>
)