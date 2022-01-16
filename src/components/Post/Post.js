import './Post.css';

const Post = (props) => {
    const {UserId, id, title, body} = props;
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