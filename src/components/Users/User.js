import React from 'react';

const User = (props) => {
    const {id, name, surname, email, address}=props;
    return (
        <div className={'users'}>
             <h1>Список users з "jsonplaceholder.typicode.com"</h1>
            {/*{id}--{name}--{surname}--{email}--{address}*/}
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>email: {email}</div>
            <div>address: {address}</div>

        </div>
    );
};

export default User;