import React from 'react';
import './Main.scss';

import PropTypes from 'prop-types';
import SocialLinks from '../../atoms/SocialLinks/SocialLinks';


function Main({ children, page }) {
  return (
    <main className={`${page} container`}>
      <SocialLinks />
      <div className="content">

        {children}

      </div>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  page: PropTypes.string.isRequired,
};


export default Main;
