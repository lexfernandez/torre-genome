import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Timeline} from 'antd';
import {Result} from './Result';
import classes from './ProfessionalCulture.module.css';

export const ProfessionalCulture = ({groups, analyses}) => {
  let timelineItems = groups.map((group) => {
    let groupAnalyses = analyses.filter(
      (analysis) => analysis.groupId === group.id && analysis.analysis > 0,
    );
    return (
      <Timeline.Item key={group.id}>
        <Result group={group} analyses={groupAnalyses} />
      </Timeline.Item>
    );
  });

  return (
    <Row>
      <Col span={24} className={classes.Dynamics}>
        <Timeline mode="alternate">{timelineItems}</Timeline>
      </Col>
    </Row>
  );
};

ProfessionalCulture.propTypes = {
  groups: PropTypes.array.isRequired,
  analyses: PropTypes.array.isRequired,
};
