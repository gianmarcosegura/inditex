import React, { useEffect, useState } from 'react';
import { InputSearch, Card } from '../../components';
import { getData } from '../../utils/apiService';
import './Main.css';

export const Main = () => {
    const [characters, setCharacters] = useState(undefined);

    useEffect(() => {
        getData().then((data) => {
            setCharacters(data.data?.results);
        });
    }, [])
    return (
        <section className='content'>
            <InputSearch />
            <div className='charactersContent'>
                {
                    characters && characters.length >= 1 && (
                        characters.map((el) => (
                            <Card {...el}/>
                        ))
                    )
                }
            </div>
        </section>
    )
}