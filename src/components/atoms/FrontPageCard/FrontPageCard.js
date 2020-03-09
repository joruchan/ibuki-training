import React from 'react';
import './FrontPageCard.scss';
import PropTypes from 'prop-types';


function FrontPageCard({
  picture, altText, alignment, children, moreTxt, moreLink,
}) {
  return (
    <div className={`card ${alignment}`}>
      <div className="more">
        <p><a href={moreLink}>{moreTxt}</a></p>
        <img src="/images/icons/arrow-right.png" alt="" />
      </div>
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
  children: PropTypes.instanceOf(Array).isRequired,
  alignment: PropTypes.string,
  moreTxt: PropTypes.string.isRequired,
  moreLink: PropTypes.string.isRequired,
};

FrontPageCard.defaultProps = {
  alignment: '',
};

export default FrontPageCard;
