import './Post.css';

const Post = ({post:{UserId, id, title, body}}) => {

    return (
        <div className={'cardPost'}>
            <div>UserId: {UserId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;