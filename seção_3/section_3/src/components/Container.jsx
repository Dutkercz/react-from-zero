import React from 'react';

const Container = ({children, myval}) => {
    return (
        <div>
            <h2>Este é um container</h2>
            {children}
            <p>My val é : {myval}</p>

        </div>
    );
};

export default Container;