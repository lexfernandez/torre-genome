import React from 'react';
import {Row, Spin} from 'antd';

export const Loading = () => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{width: '100%', height: '100%'}}>
      <Spin />
    </Row>
  );
};
