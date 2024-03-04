import React from "react";
import './Card.css';
import heartNotSelect from './../../assets/heart_notSelected.png'

export const Card = (props) => {
    const cleanTitle = (string) => string.split('(', 1)[0];

    return (
        <div className="card_container">
            <img src={`${props.thumbnail.path}.${props.thumbnail.extension}`} className="card_image" alt='thumbnail' width={'188.57px'} height={'189.95px'}/>
            <div className="card_content">
                <span className="card_name">{cleanTitle(props.name)}</span>
                <span>
                    <img src={heartNotSelect} className='heart' alt='favourites_image' />
                </span>
            </div>
        </div>
    )
}