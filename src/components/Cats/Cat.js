import React from 'react';

const Cat = ({cat:{id,name}, getCatId}) => {
    return (
        <div>
            <div>Name: {name}</div>
            <button onClick={()=>getCatId(id)}>Delete</button>
        </div>
    );
};

export default Cat;