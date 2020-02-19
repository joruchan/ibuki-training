import React from 'react';
import './FrontPageCard.scss';
import PropTypes from 'prop-types';


function FrontPageCard({
  picture, altText, alignment, children,
}) {
  return (
    <div className={`card ${alignment}`}>
      <img src={picture} alt={altText} className="card-img" />
      <div className="card-txt">
        <p>{children}</p>
      </div>
    </div>
  );
}

FrontPageCard.propTypes = {
  picture: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  alignment: PropTypes.string,
};

FrontPageCard.defaultProps = {
  alignment: '',
};

export default FrontPageCard;
