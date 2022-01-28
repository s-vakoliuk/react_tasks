import React, {useState} from 'react';

import css from './Form.module.css'


const FormDogs = () => {

    const [nameDog, setNameDog]=useState('');

    function onSubmit(event){
        event.preventDefault();
        // console.log(event.target.nameDog.value);
        console.log(event);
    }

    function onNameDogChange (event) {
        setNameDog(event.target.value);
    }

    return (
        <div className={css.FormDogs}>

            <h3>Введіть імена песиків-гавгесиків</h3>
            <form onSubmit={onSubmit}>
                Add Dog: <input type="text" name={'nameDog'} value={nameDog} onChange={onNameDogChange}/>
                <button>Save</button>
            </form>
            <p>{nameDog}</p>

        </div>
    );
};

export default FormDogs;