import React, { useContext } from 'react';
import { InputSearch, Card } from '../../components';
import './Favorites.css';
import { MyContext } from '../../utils/context';

export const Favorites = () => {
  const { favorites } = useContext(MyContext);

  return (
    <section className="content">
      <p>FAVORITES</p>
      <InputSearch count={favorites?.length} />
      <div className="charactersContent">
        {favorites && favorites.length >= 1 && favorites.map((el) => <Card {...el} />)}
      </div>
    </section>
  );
};
