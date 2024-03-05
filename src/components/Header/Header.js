import React from 'react';
import './Header.css';
import logo from './../../assets/marvel_logo.png';
import heart_selected from './../../assets/heart_selected.png';
import heart_notSelected from './../../assets/heart_notSelected.png';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const Header = ({ count = 0 }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img src={logo} alt="logo_marvel" className="logo_img" onClick={() => navigate('/')} />
      <div className="favorites">
        <img
          src={count ? heart_selected : heart_notSelected}
          className="heart"
          alt="favorites_image"
          onClick={() => navigate('/favorites')}
        />
        {count >= 1 && count}
      </div>
    </div>
  );
};

Header.propTypes = {
  count: PropTypes.number
};
