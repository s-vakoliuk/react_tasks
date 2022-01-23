import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";

const UserPostsPage = () => {
    const {id}=useParams();
    console.log(id);
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(()=>{
        userService.getById(id).then(value=>setPosts({...value}))
     }, [])


    return (
        <div>
            UserPostsPage
            {JSON.stringify(posts)}
             <Outlet/>
        </div>
    );
};

export {UserPostsPage};