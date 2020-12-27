import React from 'react';
import {Row, Col, Avatar, Space, Typography, Divider} from 'antd';
import {
  AntDesignOutlined,
  SafetyCertificateOutlined,
  SecurityScanOutlined,
} from '@ant-design/icons';
import MediaLinks from '../media-links';
import classes from './Profile.module.css';
import PropTypes from 'prop-types';
import {Summary} from '../summary/Summary';
import {Skills} from '../skills/Skills';
const {Text} = Typography;

export const Profile = ({person}) => {
  let verified = <SafetyCertificateOutlined className={classes.Verified} />;
  if (!person.verified) {
    verified = <SecurityScanOutlined className={classes.PendingVerification} />;
  }
  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col>
            <Avatar
              size={{xs: 40, sm: 40, md: 64, lg: 64, xl: 80, xxl: 80}}
              src={person.picture}
              icon={<AntDesignOutlined />}
            />
          </Col>
          <Col flex="auto" className={classes.Header}>
            <Row justify="start" align="middle" className={classes.Name}>
              <Space>
                <div>{person.name}</div>
                <div>{verified}</div>
              </Space>
            </Row>
            <Row>
              <Text>{person.professionalHeadline}</Text>
            </Row>
            <Row>
              <Text type="secondary">{person.location.shortName}</Text>
            </Row>
          </Col>
        </Row>
        <Summary summary={person.summaryOfBio} />
        <MediaLinks links={person.links} />
        <Divider orientation="left" plain>
          Contact Alex regarding:
        </Divider>

        <Divider orientation="left" plain>
          Current skills:
        </Divider>
        <Skills skills={person.strengths} />
        <Divider orientation="left" plain>
          Skills s/he wants to develop:
        </Divider>
        <Skills skills={person.interests} />
        <Divider orientation="left" plain>
          Industries and sectors of interest:
        </Divider>
        <Divider orientation="left" plain>
          Languages:
        </Divider>
      </Col>
    </Row>
  );
};

Profile.propTypes = {
  person: PropTypes.shape({
    professionalHeadline: PropTypes.string,
    completion: PropTypes.number.isRequired,
    showPhone: PropTypes.bool.isRequired,
    created: PropTypes.string,
    verified: PropTypes.bool.isRequired,
    flags: PropTypes.shape({
      benefits: PropTypes.bool.isRequired,
      canary: PropTypes.bool.isRequired,
      enlauSource: PropTypes.bool.isRequired,
      fake: PropTypes.bool.isRequired,
      featureDiscovery: PropTypes.bool.isRequired,
      getSignaledBenefitsViewed: PropTypes.bool.isRequired,
      firstSignalSent: PropTypes.bool.isRequired,
      promoteYourselfBenefitsViewed: PropTypes.bool.isRequired,
      promoteYourselfCompleted: PropTypes.bool.isRequired,
      importingLinkedin: PropTypes.bool.isRequired,
      onBoarded: PropTypes.bool.isRequired,
      remoter: PropTypes.bool.isRequired,
      signalsFeatureDiscovery: PropTypes.bool.isRequired,
      signedInToOpportunities: PropTypes.bool.isRequired,
      importingLinkedinRecommendations: PropTypes.bool.isRequired,
      contactsImported: PropTypes.bool.isRequired,
      appContactsImported: PropTypes.bool.isRequired,
      genomeCompletionAcknowledged: PropTypes.bool.isRequired,
    }).isRequired,
    weight: PropTypes.number.isRequired,
    locale: PropTypes.string.isRequired,
    subjectId: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    hasEmail: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.object.isRequired),
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
      shortName: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      timezone: PropTypes.string.isRequired,
      timezoneOffSet: PropTypes.number.isRequired,
    }),
    theme: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    pictureThumbnail: PropTypes.string,
    claimant: PropTypes.bool.isRequired,
    summaryOfBio: PropTypes.string,
    weightGraph: PropTypes.string.isRequired,
    publicId: PropTypes.string.isRequired,
    strengths: PropTypes.arrayOf(PropTypes.object.isRequired),
    interests: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),
};
