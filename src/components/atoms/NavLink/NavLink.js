import PropTypes from 'prop-types';
import React from 'react';
import './NavLink.scss';

function NavLink({ link, title }) {
    return (
        <a href={link} className='nav__link'>
            {title}
        </a>
    );
}

NavLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NavLink;
