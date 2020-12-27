import React from 'react';
import {Typography, Row, Tooltip} from 'antd';
import classes from './Summary.module.css';
import PropTypes from 'prop-types';

const {Text} = Typography;

export const Summary = ({summary, rows}) => {
  if (!summary) return null;

  return (
    <Row className={classes.Container}>
      <Tooltip title={summary}>
        <Text strong>
          <div
            className={classes.Ellipsis}
            style={{WebkitLineClamp: rows || null}}>
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
