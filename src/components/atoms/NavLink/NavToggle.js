import PropTypes from 'prop-types';
import React from 'react';
import './NavToggle.scss';

function NavToggle({ clickToggle, toggled }) {
    return (
        <div
            className={`nav-toggle ${toggled ? 'open' : ''}`}
            onClick={clickToggle}
            onKeyDown={clickToggle}
            role='button'
            tabIndex={0}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
        </div>
    );
}

NavToggle.propTypes = {
    clickToggle: PropTypes.func.isRequired,
    toggled: PropTypes.bool.isRequired
};

export default NavToggle;
