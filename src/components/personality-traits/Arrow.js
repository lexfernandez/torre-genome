import React from 'react';
import PropTypes from 'prop-types';

export const Arrow = ({position, rotate, className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="25"
      className={className}
      style={{left: `${position}%`}}
      transform={`rotate(${rotate})`}>
      <path d="M5 .5l4.5 9h-4v15h-1v-15h-4L5 .5z" fill="#2196F3"></path>
    </svg>
  );
};

Arrow.propTypes = {
  rotate: PropTypes.number,
};

Arrow.defaultProps = {
  rotate: 0,
};
