import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import css from "../UsersPage/UserPage.module.css";

const UserPostsPage = () => {

    const {id}=useParams();
    console.log("id", id);

    const [posts, setPosts] = useState([]);
    console.log("posts", posts);

    useEffect(()=>{
        userService.getById(id).then(value=>setPosts([...value]))
     }, [id])

    return (
        <div className={css.listUsersPosts}>
            UserPostPage
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
        </div>
    );
};
export {UserPostsPage};