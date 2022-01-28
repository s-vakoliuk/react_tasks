import React from 'react';

import css from "./Main.module.css";
import FormCats from "../Form/FormCats";
import FormDogs from "../Form/FormDogs";


const Main = () => {
    return (
        <div className={css.MainWrap}>

            <FormCats/>
            <FormDogs/>

        </div>
    );
};

export default Main;