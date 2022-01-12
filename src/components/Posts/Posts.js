import {useEffect, useState} from "react";
import Post from "./Post";
import './Posts.css';

const Posts = () => {
    const [posts, setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value=>value.json())
            .then(value=>setUsers(value))
    }, [])
    return (
        <div className={'wrapPosts'}>
            {posts.map(value=> <Post key={value.id} id={value.id} title={value.title} body={value.body} />)}
        </div>
    );
};

export default Posts;