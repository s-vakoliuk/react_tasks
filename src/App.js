import React, {useState} from 'react';

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";

import './App.css';

function App() {
    const [user, setUser]=useState(null);
    const [userId, setUserId] = useState(null);

    const getUser=(user)=>{
        setUser(user)
        setUserId(null)
    }

    const getUserId = (id) => {
        setUserId(id)
    }

    return (
    <div className={'wrap'}>
        <div>
            <Users getUser={getUser()}/>
            {user&&<UserDetails user={user}/>}
        </div>
        {userId&&<Posts/>}
    </div>
  );
}

export default App;
