import React from 'react';

const Loader = () => {
    return (
        <div
            className='loader'
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <img src='/images/deco/loading.gif' alt='' />
        </div>
    );
};

export default Loader;
