import PropTypes from 'prop-types';
import React from 'react';
import './Banner.scss';

function Banner({ text, img }) {
    return (
        <div className='banner'>
            <div className='banner-img' style={{ backgroundImage: `url(${img})` }} />
            <div className='banner-txt'>
                <p>{text}</p>
            </div>
        </div>
    );
}

Banner.propTypes = {
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default Banner;
