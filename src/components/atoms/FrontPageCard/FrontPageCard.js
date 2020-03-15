import PropTypes from 'prop-types';
import React from 'react';
import './FrontPageCard.scss';

function FrontPageCard({ picture, altText, alignment, children, moreTxt, moreLink }) {
    return (
        <a href={moreLink}>
            <div className={`card ${alignment}`}>
                <div className='more'>
                    <p>{moreTxt}</p>
                    <img src='/images/icons/arrow-right.png' alt='' />
                </div>
                <img src={picture} alt={altText} className='card-img' />
                <div className='card-txt'>
                    <p>{children}</p>
                </div>
            </div>
        </a>
    );
}

FrontPageCard.propTypes = {
    picture: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    children: PropTypes.instanceOf(Array).isRequired,
    alignment: PropTypes.string,
    moreTxt: PropTypes.string.isRequired,
    moreLink: PropTypes.string.isRequired
};

FrontPageCard.defaultProps = {
    alignment: ''
};

export default FrontPageCard;
