import PropTypes from 'prop-types';
import React from 'react';
import SocialLinks from '../../atoms/SocialLinks/SocialLinks';
import './Main.scss';

function Main({ children, page }) {
    return (
        <main className={`${page} container`}>
            <SocialLinks />
            <div className='content'>{children}</div>
        </main>
    );
}

Main.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    page: PropTypes.string.isRequired
};

export default Main;
