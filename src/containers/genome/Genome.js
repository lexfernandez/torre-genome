import React, {useState, useEffect} from 'react';
import {Alert, Badge, Col, message, Row, Skeleton} from 'antd';
import {Profile} from '../../components/profile/Profile';
import fakeGenome from './genome.json';
import Behavior from '../../components/behavior';
import {useParams} from 'react-router-dom';
import * as Api from '../../api/genome-api';
import Card from '../../components/card';
import {PersonContext} from '../../contexts';

export const Genome = () => {
  const [genome, setGenome] = useState(undefined);
  const [error, setError] = useState(false);
  let {username} = useParams();

  useEffect(() => {
    setGenome(undefined);
    setError(false);
    async function getData() {
      try {
        let response = await Api.getGenome(username);
        let bio = response.data;
        setGenome(bio);
      } catch (error) {
        message.error(error.message);
        setGenome(fakeGenome);
        setError(true);
      }
    }
    getData();
  }, [username]);

  let notFound = (
    <Row>
      <Col span={24}>
        <strong>404:</strong>Sorry, The time is out, the feature will be
        delivered in the next stage
      </Col>
    </Row>
  );

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

  let reputation = <Skeleton active paragraph={{rows: 5}} />;
  if (genome) {
    reputation = notFound;
  }
  let professionalExperience = <Skeleton active paragraph={{rows: 5}} />;
  if (genome) {
    professionalExperience = notFound;
  }

  let behavior = <Skeleton active paragraph={{rows: 5}} />;
  if (genome) {
    behavior = (
      <PersonContext.Provider value={genome.person}>
        <Behavior
          personalityTraits={genome.personalityTraitsResults}
          professionalCulture={genome.professionalCultureGenomeResults}
        />
      </PersonContext.Provider>
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
          <Badge.Ribbon text="About">
            <Card>{profile}</Card>
          </Badge.Ribbon>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <Badge.Ribbon text="Reputation">
            <Card>{reputation}</Card>
          </Badge.Ribbon>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <Badge.Ribbon text="Professional Experience">
            <Card>{professionalExperience}</Card>
          </Badge.Ribbon>
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={6} xl={6}>
          <Badge.Ribbon text="Behavior">
            <Card>{behavior}</Card>
          </Badge.Ribbon>
        </Col>
      </Row>
    </>
  );
};
