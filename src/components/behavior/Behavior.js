import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Divider} from 'antd';
import PersonalityTraits from '../personality-traits';
import classes from './Behavior.module.css';
import ProfessionalCulture from '../professional-culture';

export const Behavior = ({personalityTraits, professionalCulture}) => {
  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={24}>
          <Divider orientation="left">Personality traits</Divider>
          <PersonalityTraits
            groups={personalityTraits.groups}
            analyses={personalityTraits.analyses}
          />
          </Col>
        </Row>
        <Row>
          <Divider orientation="left">Professional culture</Divider>
          <ProfessionalCulture
            groups={professionalCulture.groups}
            analyses={professionalCulture.analyses}
          />
        </Row>
      </Col>
    </Row>
  );
};

Behavior.propTypes = {
  personalityTraits: PropTypes.shape({
    groups: PropTypes.array,
    analyses: PropTypes.array,
  }),
  professionalCulture: PropTypes.shape({
    groups: PropTypes.array,
    analyses: PropTypes.array,
  }),
};
