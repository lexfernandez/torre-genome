import React from 'react';
import PropTypes from 'prop-types';
import './HexGraph.module.css';

export const HexGraph = ({
  width,
  onClick,
  onHover,
  pieces,
  strokeWidth,
  initialPosition,
}) => {
  let elementsRotation = [];

  for (let i = 0; i < pieces; i++) {
    const rotation = initialPosition + i * (360 / pieces);
    elementsRotation.push(rotation);
  }

  let svgElements = elementsRotation.map((rotation, index) => {
    return (
      <a
        key={index}
        href="#"
        xlinkHref="#"
        onClick={() => onClick(index)}
        onMouseOver={() => onHover(index)}>
        <g>
          <use xlinkHref="#sector" transform={`rotate(${rotation})`}></use>
        </g>
      </a>
    );
  });

  return (
    <svg viewBox="-50 -50 100 100" width={width}>
      <defs>
        <path
          id="sectorpath"
          d="M0,0 L38.97114317029974,-22.499999999999996 A45,0 0 0 1 38.97114317029974,22.499999999999996 L0,0 A0,0 0 0 0 0,0"></path>
        <mask id="themask">
          <use
            xlinkHref="#sectorpath"
            style={{
              stroke: '#000',
              strokeWidth: strokeWidth,
              fill: '#ffffff',
            }}></use>
        </mask>
        <use
          xlinkHref="#sectorpath"
          id="sector"
          style={{mask: 'url(#themask)'}}></use>
      </defs>

      {svgElements}
    </svg>
  );
};

HexGraph.propTypes = {
  width: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  pieces: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  initialPosition: PropTypes.number.isRequired,
};

HexGraph.defaultProps = {
  width: 150,
  onClick: () => {},
  onHover: () => {},
  pieces: 6,
  strokeWidth: 2,
  initialPosition: 0,
};
