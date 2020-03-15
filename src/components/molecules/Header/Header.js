import PropTypes from 'prop-types';
import React from 'react';
import ScrollDown from '../../atoms/CustomIcons/ScrollDown/ScrollDown';
import NavBar from '../NavBar/NavBar';
import './Header.scss';

function Header({ frontPage }) {
    return (
        <header className={`${frontPage ? 'front-page' : ''} upper-wrapper`}>
            <NavBar />

            <div className='page-title'>
                {frontPage ? (
                    <>
                        <h1>IBUKI TRAINING</h1>
                        <h3 className='sub-title'>
                            SCIENTIFIC
                            <br />
                            APPROACH
                            <br />
                            TO
                            <br />
                            SPORTS
                        </h3>
                    </>
                ) : (
                    ''
                )}
            </div>
            {frontPage ? <ScrollDown /> : ''}
        </header>
    );
}

Header.propTypes = {
    frontPage: PropTypes.bool
};

Header.defaultProps = {
    frontPage: false,
    pageTitle: ''
};

export default Header;
