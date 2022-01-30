import React from 'react';

import css from "../components.module.css";
import {Dog} from "./Dog";

const Dogs = ({dogs, getDogId}) => {
    return (
        <div className={css.DogsList}>
            Список песиків гавгесиків
            {dogs.map(dog=><Dog key={dog.id} dog={dog} getDogId={getDogId}/>)}
        </div>
    );
};

export {Dogs};