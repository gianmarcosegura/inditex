import React, { useContext } from 'react';
import { InputSearch, Card } from '../../components';
import './Favorites.css';
import { MyContext } from '../../utils';

export const Favorites = () => {
  const { favorites } = useContext(MyContext);

  return (
    <section className="content">
      <h2 className="favorites_title">FAVORITES</h2>
      <InputSearch count={favorites?.length} />
      <div className="charactersContentFavorites">
        {favorites && favorites.length >= 1 && favorites.map((el) => <Card key={el.id} {...el} />)}
      </div>
    </section>
  );
};
