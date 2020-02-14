import React from 'react';
import './Header.scss';

import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import ScrollDown from '../../atoms/CustomIcons/ScrollDown/ScrollDown';


function Header({ frontPage }) {
  return (
    <header className={`${frontPage ? 'front-page' : ''} wrapper`}>

      <NavBar />
      <div className="page-title">
        <h1>IBUKI TRAINING</h1>
        {frontPage ? (
          <h3 className="sub-title">
            SCIENTIFIC
            <br />
            APPROACH
            <br />
            TO
            <br />
            SPORTS
          </h3>
        ) : ''}
      </div>
      {frontPage ? <ScrollDown /> : ''}

    </header>
  );
}

Header.propTypes = {
  frontPage: PropTypes.bool,
};

Header.defaultProps = {
  frontPage: false,
};

export default Header;
