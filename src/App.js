import React, {useState} from 'react';

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";

import './App.css';

function App() {
    const [user, setUser]=useState(null);
    const [userId, setUserId] = useState(null);

    const getUser=(user)=>{
        setUser(user);
        setUserId(null);
    }

    const getUserId = (id) => {
        setUserId(id);
    }

    return (
    <div>
        <div className={'wrapUsersDetails'}>
            <Users getUser={getUser}/>
            {user && <UserDetails user={user} getUserId={getUserId}/>}
        </div>
        {userId && <Posts userId={userId}/>}
    </div>
  );
}

export default App;
