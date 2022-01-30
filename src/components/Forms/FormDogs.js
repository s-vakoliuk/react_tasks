import React from 'react';

import css from '../components.module.css'
import {useForm} from "react-hook-form";

const FormDogs = ({getDataOfFormDogs}) => {
    const {handleSubmit, register, reset}= useForm();

    const submit = (data) => {
        getDataOfFormDogs(data)
        reset()
    }

    return (
        <div className={css.FormDogs}>
            <h3>Введіть імена песиків-гавгесиків</h3>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add Cat: <input type="text" {...register('name')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export {FormDogs};