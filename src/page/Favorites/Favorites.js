import React, { useContext, useEffect, useState } from 'react';
import { InputSearch, Card } from '../../components';
import './Favorites.css';
import { MyContext } from '../../utils';

export const Favorites = () => {
  const { favorites } = useContext(MyContext);
  const [searchText, setSearchText] = useState('');
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    if (searchText && favorites && favorites.length >= 1) {
      const resultFiltered = favorites
        .map((el) => (el.name?.toLowerCase().includes(searchText.toLowerCase()) ? el : null))
        .filter((n) => n);
      setFilteredFavorites(resultFiltered);
    } else {
      setFilteredFavorites(favorites);
    }
  }, [searchText, favorites]);

  return (
    <section className="content">
      <h2 className="favorites_title">FAVORITES</h2>
      <InputSearch count={filteredFavorites?.length} setSearchText={setSearchText} />
      <div className="charactersContentFavorites">
        {filteredFavorites &&
          filteredFavorites.length >= 1 &&
          filteredFavorites.map((el) => <Card key={el.id} {...el} />)}
      </div>
    </section>
  );
};
