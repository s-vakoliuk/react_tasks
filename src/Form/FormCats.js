import React, {useState} from 'react';

import css from './Form.module.css'


const FormCats = (value) => {

    const [nameCat, setNameCat]=useState('');

    function onSubmit(event){
        event.preventDefault();
        // console.log(event.target.nameCat.value);
        console.log(nameCat);
    }

    function onNameCatChange (event) {
        setNameCat(event.target.value)
    }

    return (
        <div className={css.FormCats}>

            <h3>Введіть імена котиків-муркотиків</h3>
            <form onSubmit={onSubmit}>
                Add Cat: <input type="text" name={'nameCat'} value={nameCat} onChange={onNameCatChange}/>
                <button>Save</button>
            </form>

        </div>
    );
};

export default FormCats;