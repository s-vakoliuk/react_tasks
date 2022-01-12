import {useEffect, useState} from "react";

import Comment from "./Comment";
import './Comments.css';


const Comments = () => {
    const [comments, setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value=>value.json())
            .then(value=>setUsers(value))
    }, [])
    return (
        <div className={'wrapComments'}>
            {comments.map(value=> <Comment key={value.id} id={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </div>
    );
};

export default Comments;