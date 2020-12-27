import {Col, Row} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import {AntDesignOutlined} from '@ant-design/icons';
import classes from './Genome.module.css';

export const Genome = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <Row align="middle" className={classes.Card}>
            <Col flex="none">
              <Row justify="center">
                <Avatar
                  size={{xs: 40, sm: 40, md: 64, lg: 64, xl: 80, xxl: 80}}
                  icon={<AntDesignOutlined />}
                />
              </Row>
            </Col>
            <Col
              xs={20}
              sm={20}
              md={22}
              lg={18}
              xl={18}
              className={classes.Name}>
              <Row justify="start">Alex Omar Fernandez Lorenzo</Row>
            </Col>
          </Row>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <Row align="middle" className={classes.Card}>
            Reputation
          </Row>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <Row align="middle" className={classes.Card}>
            Resume
          </Row>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <Row align="middle" className={classes.Card}>
            behavior
          </Row>
        </Col>
      </Row>
    </>
  );
};
