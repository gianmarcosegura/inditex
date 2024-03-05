import React, { useEffect, useState } from 'react';
import { InputSearch, Card } from '../../components';
import { getData } from '../../utils/apiService';
import './Main.css';

export const Main = () => {
  const [count, setCount] = useState(50);
  const [characters, setCharacters] = useState(undefined);

  useEffect(() => {
    getData(count).then((data) => {
      setCharacters(data.data?.results);
      setCount(data.data?.limit);
    });
  }, []);

  return (
    <section className="content">
      <InputSearch count={count} />
      <div className="charactersContent">
        {characters &&
          characters.length >= 1 &&
          characters.map((el, index) => <Card key={index} {...el} />)}
      </div>
    </section>
  );
};
