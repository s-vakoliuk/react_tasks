
import css from './App.module.css';
import Main from "../Main/Main";
import Cats from "../components/Cats/Cats";
import React from "react";
import Dogs from "../components/Dogs/Dogs";

function App() {
  return (
      <div className={css.AppWrap}>

          <Main/>
          <Cats/>
          <Dogs/>

      </div>
  );
}

export default App;
