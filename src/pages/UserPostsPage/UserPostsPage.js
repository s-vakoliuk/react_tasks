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
        <>
            {/*<h3>UserPostsPage</h3>*/}
            {/*{posts.map((post)=> (*/}
            {/*    <div>*/}
            {/*    <h4>{post.id}</h4>*/}
            {/*    <p>{post.title}</p>*/}
            {/*    <p>{post.body}</p>*/}
            {/*    </div>*/}
            {/*    ))}*/}

            {JSON.stringify(posts)}
             <Outlet/>
        </>
    );
};
export {UserPostsPage};