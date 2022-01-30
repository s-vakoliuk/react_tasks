import React from 'react';

import css from '../components.module.css'
import {Cat} from "./Cat";

const Cats = ({cats, getCatId}) => {
    return (
        <div className={css.CatsList}>
            Список котиків муркотиків
            {cats.map(cat=><Cat key={cat.id} cat={cat} getCatId={getCatId}/>)}
        </div>
    );
};

export {Cats};