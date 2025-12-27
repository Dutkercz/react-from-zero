import React from 'react';

const Fragment = (propFrag) => {
    return (
        <>
            <h1>
                Deu Certo title 1
            </h1>
            <h2>Title 2</h2>
            <h3>{propFrag.propFrag}</h3>

        </>
    );
};

export default Fragment;