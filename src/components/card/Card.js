import React from 'react';
import {Row, Col} from 'antd';

import classes from './Card.module.css';

export const Card = ({children}) => {
  return (
    <Row>
      <Col span={24} className={classes.Card}>
        {children}
      </Col>
    </Row>
  );
};
