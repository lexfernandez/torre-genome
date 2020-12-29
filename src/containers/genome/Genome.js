import React, {useState, useEffect} from 'react';
import {Alert, Col, Row, Skeleton} from 'antd';
import {Profile} from '../../components/profile/Profile';
import fakeGenome from './genome.json';
import Behavior from '../../components/behavior';
import {useParams} from 'react-router-dom';
import * as Api from '../../api/genome-api';
import Card from '../../components/card';

export const Genome = () => {
  const [genome, setGenome] = useState(undefined);
  const [error, setError] = useState(false);
  let {username} = useParams();

  useEffect(async () => {
    setGenome(undefined);
    setError(false);
    async function getData() {
      try {
        let response = await Api.getGenome(username);
        console.log(JSON.stringify(response.data));
        let bio = response.data;
        console.log(bio);
        setGenome(bio);
      } catch (error) {
        setGenome(fakeGenome);
        setError(true);
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

  let errorMessage = null;
  if (error) {
    errorMessage = (
      <Col span={24}>
        <Alert
          message="Sorry! the request failed; you are looking at a fake genome."
          type="error"
        />
      </Col>
    );
  }

  return (
    <>
      <Row gutter={[16, 16]}>
        {errorMessage}
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className={classes.Card}>{profile}</div>
            <Card>{profile}</Card>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className={classes.Card}>Reputation</div>
            <Card></Card>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className={classes.Card}>Resume</div>
            <Card></Card>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className={classes.Card}>{behavior}</div>
            <Card>{behavior}</Card>
        </Col>
      </Row>
    </>
  );
};
