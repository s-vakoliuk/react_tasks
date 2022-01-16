import React from 'react';
import './UserDetails.css';

const UserDetails = ({user}) => {
    const {id, name, username, email, address, phone, website, company}=user;

    return (
        <div className={'cardUserDetails'}>
            <h4>{id}.{name}</h4>
            <p>Username: {username}</p>
            <p>Email:{email}</p>
            <p>Address:
                <br/>street: {address.street};
                <br/>suite:  {address.suite};
                <br/>city: {address.city};
                <br/>zipcode: {address.zipcode};
            <p>geo: lat: {address.geo.lat}, lng: {address.geo.lng}</p>
            </p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company:
                <br/>{company.name}
                <br/>{company.catchPhrase}
                <br/>{company.bs}
            </p>
            <button>Show user`s posts</button>
        </div>
    );
};

export default UserDetails;