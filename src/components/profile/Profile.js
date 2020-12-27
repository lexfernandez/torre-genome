import React from 'react';
import {Row, Col, Avatar} from 'antd';
import {AntDesignOutlined} from '@ant-design/icons';
import MediaLinks from '../media-links';
import classes from './Profile.module.css';

export const Profile = ({person}) => {
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col>
            <Avatar
              size={{xs: 40, sm: 40, md: 64, lg: 64, xl: 80, xxl: 80}}
              icon={<AntDesignOutlined />}
            />
          </Col>
          <Col flex="auto" className={classes.Name}>
            <Row justify="start">Alex Omar Fernandez Lorenzo</Row>
          </Col>
        </Row>
        <MediaLinks />
      </Col>
    </Row>
  );
};
