import React from 'react';

const UserProfile = ( props ) => (
    <div>
        <h1>{props.name}</h1>
        <div>
            <img src={props.picture} alt="profile" />
            <div>
                <h3>{props.nickname}</h3>
            </div>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    </div>
);

export default UserProfile
