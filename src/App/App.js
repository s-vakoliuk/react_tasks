import React, {useState} from "react";

import css from './App.module.css';
import {Cats,FormCats} from "../components";
import {Dogs, FormDogs} from "../components";

function App() {

    const [cats, setCats]=useState([]);
    const [dogs, setDogs]=useState([]);

    // Функція getDataOfFormCats для витягування даних в змінній data з FormCats
    const getDataOfFormCats=(data=>{
        setCats([...cats, {id:new Date().getTime(), ...data}]) //id отримуємо з new Date().getTime()
    })

    const getCatId =(id)=>{
        setCats(cats.filter(cat=>cat.id!==id))
    }

    // Функція getDataOfFormDogs для витягування даних в змінній data з FormDogs
    const getDataOfFormDogs=(data=>{
        setDogs([...dogs, {id:new Date().getTime(), ...data}]) //id отримуємо з new Date().getTime()
    })

    const getDogId =(id)=>{
        setDogs(dogs.filter(dog=>dog.id!==id))
    }

    return (
      <div className={css.AppWrap}>
          <div className={css.FormWrap}>
              <FormCats getDataOfFormCats={getDataOfFormCats}/>
              <FormDogs getDataOfFormDogs={getDataOfFormDogs}/>
          </div>
          <div className={css.CatsDogsWrap}>
              <Cats getCatId={getCatId} cats={cats}/>
              <Dogs getDogId={getDogId} dogs={dogs}/>
          </div>
      </div>
  );
}

export default App;
