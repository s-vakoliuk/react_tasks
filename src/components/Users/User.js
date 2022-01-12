import './User.css';

const User = (props) => {
    const {id, name, surname, email} = props;
    return (
        <div className={'cardUsers'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>email: {email}</div>
        </div>
    );
};

export default User;