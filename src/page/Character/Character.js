import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Character.css';
import { MyContext, getComics, cleanTitle } from '../../utils';
import heartNotSelect from './../../assets/heart_notSelected.png';
import heartSelected from './../../assets/heart_selected.png';
import { LoaderBar } from '../../components';

export const Character = () => {
  const { state } = useLocation();
  const { favorites, setFavorites } = useContext(MyContext);
  const [comics, setComics] = useState(undefined);
  const index = favorites.findIndex((item) => item.id === state.id);

  useEffect(() => {
    getComics(state.id).then((data) => setComics(data.data?.results));
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
        {!comics && <LoaderBar />}
        {comics && comics.length >= 1 && (
          <div className="character_content_spacing">
            <h2 className="comics_title">COMICS</h2>
            <div className="comics_container">
              {comics.map((el) => (
                <div className="comic_element" key={el.id}>
                  <img
                    src={`${el.thumbnail.path}.${el.thumbnail.extension}`}
                    className="comic_image"
                    alt="el.name"
                  />
                  <div className="comic_title">{el.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {comics && comics.length === 0 && <div>This character has no comics</div>}
      </div>
    </>
  );
};
