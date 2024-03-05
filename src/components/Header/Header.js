import React, { useContext } from 'react';
import './Header.css';
import logo from './../../assets/marvel_logo.png';
import heart_selected from './../../assets/heart_selected.png';
import heart_notSelected from './../../assets/heart_notSelected.png';

import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../utils/context';

export const Header = () => {
  const navigate = useNavigate();
  const { favorites } = useContext(MyContext);

  return (
    <div className="container">
      <img src={logo} alt="logo_marvel" className="logo_img" onClick={() => navigate('/')} />
      <div className="favorites" onClick={() => navigate('/favorites')}>
        <img
          src={favorites && favorites.length >= 1 ? heart_selected : heart_notSelected}
          className="heart"
          alt="favorites_image"
        />
        {favorites && favorites.length >= 1 && favorites.length}
      </div>
    </div>
  );
};
