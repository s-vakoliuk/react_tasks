import React from 'react';

import css from '../components.module.css'
import {useForm} from "react-hook-form";

const FormCats = ({getDataOfFormCats}) => {
    const {handleSubmit, register, reset}= useForm();

    const submit = (data) => {
        getDataOfFormCats(data)
        reset()
    }

    return (
        <div className={css.FormCats}>
            <h3>Введіть імена котиків-муркотиків</h3>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add Cat: <input type="text" {...register('name')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {FormCats};