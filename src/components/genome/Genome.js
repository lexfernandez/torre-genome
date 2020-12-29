import React from 'react';
import {Col, Row, Skeleton} from 'antd';
import classes from './Genome.module.css';
import {Profile} from '../profile/Profile';
import genome from './genome.json';
import Behavior from '../behavior';

export const Genome = () => {
  let profile = <Skeleton active paragraph={{rows: 5}} />;
  if (genome) {
    profile = (
            <Profile
              person={genome.person}
              strengths={genome.strengths}
              interests={genome.interests}
              opportunities={genome.opportunities}
              languages={genome.languages}
            />
    );
  }

  let behavior = <Skeleton active paragraph={{rows: 5}} />;
  if (genome) {
    behavior = (
      <Behavior
        personalityTraits={genome.personalityTraitsResults}
        professionalCulture={genome.professionalCultureGenomeResults}
      />
    );
  }

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className={classes.Card}>{profile}</div>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className={classes.Card}>Reputation</div>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className={classes.Card}>Resume</div>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className={classes.Card}>{behavior}</div>
        </Col>
      </Row>
    </>
  );
};
