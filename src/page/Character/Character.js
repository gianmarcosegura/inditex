import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Character.css';
import { MyContext } from '../../utils/context';
import heartNotSelect from './../../assets/heart_notSelected.png';
import heartSelected from './../../assets/heart_selected.png';
import { getComics } from '../../utils/apiService';

export const Character = () => {
  const { state } = useLocation();
  const { favorites, setFavorites } = useContext(MyContext);
  const [comics, setComics] = useState([]);
  const index = favorites.findIndex((item) => item.id === state.id);
  const cleanTitle = (string) => string.split('(', 1)[0];
  console.log('characterProps: ', state);

  useEffect(() => {
    getComics(state.id).then((data) => {
      console.log('data: ', data);
      setComics(data.data?.results);
    });
  }, []);

  return (
    <>
      <section className="character_container">
        <div className="character_content">
          <img
            src={`${state?.thumbnail?.path}.${state?.thumbnail?.extension}`}
            className="img_character_detail"
            alt="img_character_detail"
          />
          <div className="desc_character_detail">
            <div className="character_title">
              <div>{cleanTitle(state.name)}</div>
              <div>
                <img
                  src={index === -1 ? heartNotSelect : heartSelected}
                  className="character_heart"
                  alt="favorites_image"
                  onClick={(event) => {
                    event.stopPropagation();
                    if (index === -1) {
                      setFavorites([...favorites, state]);
                    } else {
                      setFavorites((l) => l.filter((item) => item.id !== state.id));
                    }
                  }}
                />
              </div>
            </div>
            <div className="character_desc">{state.description || 'No description from API'}</div>
          </div>
        </div>
      </section>
      <div className="character_container_spacing">
        <div className="character_content_spacing">
          <h2>COMICS</h2>
          <div className="comics_container">
            {comics && comics.length ? (
              comics.map((el) => (
                <div className="comic_element">
                  <img
                    src={`${el.thumbnail.path}.${el.thumbnail.extension}`}
                    className="comic_image"
                    alt="el.name"
                  />
                  <div className="comic_title">{el.title}</div>
                </div>
              ))
            ) : (
              <div>No comics :(</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
