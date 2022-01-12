import React from 'react';
import './App.css';

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

const App=()=> {
  return (
      <div>
      <h1>Відображення даних з сайту "jsonplaceholder.typicode.com"</h1>
          <div className={'wrapper'}>
              <Users/>
              <Posts/>
          </div>
          <Comments/>

      </div>
  );
}

export default App;
