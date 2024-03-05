import React, { useContext } from 'react';
import './Card.css';
import heartNotSelect from './../../assets/heart_notSelected.png';
import heartSelected from './../../assets/heart_selected.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../utils/context';

export const Card = (props) => {
  const navigate = useNavigate();
  const { favorites, setFavorites } = useContext(MyContext);
  const cleanTitle = (string) => string.split('(', 1)[0];
  const index = favorites.findIndex((item) => item.id === props.id);

  return (
    <div className="card_container" onClick={() => navigate('/character', { state: { ...props } })}>
      <img
        src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
        className="card_image"
        alt="thumbnail"
      />
      <div className="card_content">
        <span className="card_name">{cleanTitle(props.name)}</span>
        <span>
          <img
            src={index === -1 ? heartNotSelect : heartSelected}
            className="img_heart"
            alt="favorites_image"
            onClick={(event) => {
              event.stopPropagation();
              if (index === -1) {
                setFavorites([...favorites, props]);
              } else {
                setFavorites((l) => l.filter((item) => item.id !== props.id));
              }
            }}
          />
        </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  thumbnail: PropTypes.object,
  name: PropTypes.string
};
