import React from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';
import './BackToTop.scss';

const BackToTop = () => {
    let position = useScrollYPosition();

    return (
        <div className={`back-top ${position < 200 ? 'hidden' : ''}`}>
            <button type='button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src='/images/icons/up-arrow.svg' alt='icon arrow up' />
            </button>
        </div>
    );
};

export default BackToTop;
