import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Divider} from 'antd';
import PersonalityTraits from '../personality-traits';
import classes from './Behavior.module.css';

export const Behavior = ({personalityTraits, professionalCulture}) => {
  return (
    <Row>
      <Col span={24}>
        <Row>
          <Divider orientation="left">Personality traits</Divider>
          <PersonalityTraits
            groups={personalityTraits.groups}
            analyses={personalityTraits.analyses}
          />
        </Row>
      </Col>
    </Row>
  );
};

const results = PropTypes.objectOf(
  PropTypes.shape({
    groups: PropTypes.array,
    analyses: PropTypes.array,
  }),
);

Behavior.propTypes = {
  personalityTraits: results,
  professionalCulture: results,
};
