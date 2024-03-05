import React from 'react';
import './Card.css';
import heartNotSelect from './../../assets/heart_notSelected.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const Card = ({ thumbnail, name }) => {
  const navigate = useNavigate();
  const cleanTitle = (string) => string.split('(', 1)[0];

  return (
    <div className="card_container" onClick={() => navigate('/character')}>
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        className="card_image"
        alt="thumbnail"
      />
      <div className="card_content">
        <span className="card_name">{cleanTitle(name)}</span>
        <span>
          <img src={heartNotSelect} className="img_heart" alt="favorites_image" />
        </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  thumbnail: PropTypes.string,
  name: PropTypes.string
};
