import React, { useEffect, useState, useCallback } from 'react';
import { InputSearch, Card, LoaderBar } from '../../components';
import { getData, getDataSearch } from '../../utils';
import './Main.css';

export const Main = () => {
  const [count, setCount] = useState(50);
  const [searchText, setSearchText] = useState('');
  const [characters, setCharacters] = useState(undefined);

  const fetchData = useCallback(async () => {
    getData(count).then((data) => {
      setCharacters(data.data?.results);
      setCount(count);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getDataSearch(count, searchText).then((data) => {
        setCharacters(data.data?.results);
        setCount(count);
      });
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [searchText]);

  return (
    <section className="content">
      {!characters && <LoaderBar />}
      {characters && (
        <>
          <InputSearch count={count} setSearchText={setSearchText} />
          <div className="charactersContent">
            {characters.length >= 1 && characters.map((el, index) => <Card key={index} {...el} />)}
          </div>
        </>
      )}
    </section>
  );
};
