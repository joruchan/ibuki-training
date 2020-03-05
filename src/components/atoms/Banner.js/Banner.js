import React from 'react';
import './Banner.scss';
import PropTypes from 'prop-types';

function Banner({ text, img }) {
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${img})` }} />
      <div className="banner-txt"><p>{text}</p></div>
    </>
  );
}

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Banner;
