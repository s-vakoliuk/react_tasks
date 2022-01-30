import React from 'react';

const Dog = ({dog:{id,name}, getDogId}) => {
    return (
        <div>
            <div>Name: {name}</div>
            <button onClick={()=>getDogId(id)}>Delete</button>
        </div>
    );
};

export {Dog};