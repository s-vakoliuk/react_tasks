import React, {useState} from "react";

import css from './App.module.css';
import Cats from "../components/Cats/Cats";
import Dogs from "../components/Dogs/Dogs";
import FormCats from "../components/Forms/FormCats";
import FormDogs from "../components/Forms/FormDogs";

function App() {

    const [cats, setCats]=useState([]);
    const [dogs, setDogs]=useState([]);

    // Функція getDataOfFormCats для витягування даних в змінній data з FormCats
    const getDataOfFormCats=(data=>{
        setCats([...cats, {id:new Date().getTime(), ...data}])
    })

    // Функція getDataOfFormDogs для витягування даних в змінній data з FormDogs
    const getDataOfFormDogs=(data=>{

    })

    const detCatId =(id)=>{

    }

    return (
      <div className={css.AppWrap}>
          <div className={css.FormWrap}>
              <FormCats getDataOfFormCats={getDataOfFormCats}/>
              <FormDogs getDataOfFormDogs={getDataOfFormDogs}/>
          </div>
          <Cats cats = {cats} getCatId={getCatId}/>
          <Dogs dogs = {dogs}/>
      </div>
  );
}

export default App;
