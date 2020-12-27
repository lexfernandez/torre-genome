import React from 'react';
import {Col, Row} from 'antd';
import classes from './Genome.module.css';
import {Profile} from '../profile/Profile';
import genome from './genome.json';

export const Genome = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className={classes.Card}>
            <Profile
              person={genome.person}
              strengths={genome.strengths}
              interests={genome.interests}
              opportunities={genome.opportunities}
              languages={genome.languages}
            />
          </div>
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
