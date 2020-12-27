import React, {useState} from 'react';
import {Typography, Row, Tooltip} from 'antd';
import classes from './Summary.module.css';
import PropTypes from 'prop-types';

const {Text} = Typography;

export const Summary = ({summary, rows}) => {
  const [show, setShow] = useState(false);

  if (!summary) return null;

  let textToggle = show ? 'show less' : 'show more';
  return (
    <Row className={classes.Container}>
      <Tooltip title={summary}>
        <Text strong>
          <div
            strong
            className={classes.Ellipsis}
            style={{WebkitLineClamp: !show ? rows : null}}>
            {summary}
          </div>
        </Text>
      </Tooltip>
    </Row>
  );
};

Summary.propTypes = {
  summary: PropTypes.string,
  rows: PropTypes.number,
};

Summary.defaultProps = {
  rows: 2,
};
