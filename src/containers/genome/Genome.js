import React, {useState, useEffect} from 'react';
import {Col, Row, Skeleton} from 'antd';
import classes from './Genome.module.css';
import {Profile} from '../../components/profile/Profile';
import fakeGenome from './genome.json';
import Behavior from '../../components/behavior';
import {useParams} from 'react-router-dom';
import * as Api from '../../api/genome-api';

export const Genome = () => {
  const [genome, setGenome] = useState(undefined);
  let {username} = useParams();

  useEffect(async () => {
    setGenome(undefined);
    async function getData() {
      try {
        let response = await Api.getGenome(username);
        console.log(JSON.stringify(response.data));
        let bio = response.data;
        console.log(bio);
        setGenome(bio);
      } catch (error) {
        setGenome(fakeGenome);
        console.log(error);
      }
    }
    getData();
  }, [username]);

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
