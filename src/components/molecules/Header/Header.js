import React from 'react';
import './Header.scss';

import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import ScrollDown from '../../atoms/CustomIcons/ScrollDown/ScrollDown';


function Header({ frontPage, pageTitle }) {
  return (
    <header className={`${frontPage ? 'front-page' : ''} upper-wrapper`}>

      <NavBar />
      <div className="page-title">
        {frontPage ? (
          <>
            <h1>IBUKI TRAINING</h1>
            <h3 className="sub-title">
              SCIENTIFIC
              <br />
              APPROACH
              <br />
              TO
              <br />
              SPORTS
            </h3>
          </>
        ) : (<h2>{pageTitle}</h2>)}
      </div>
      {frontPage ? <ScrollDown /> : ''}

    </header>
  );
}

Header.propTypes = {
  frontPage: PropTypes.bool,
  pageTitle: PropTypes.string,
};

Header.defaultProps = {
  frontPage: false,
  pageTitle: '',
};

export default Header;
