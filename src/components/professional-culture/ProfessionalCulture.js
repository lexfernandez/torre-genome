import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Timeline, Tabs} from 'antd';
import {Result} from './Result';
import classes from './ProfessionalCulture.module.css';
const {TabPane} = Tabs;

export const ProfessionalCulture = ({groups, analyses}) => {
  let groupsByAnswer = groups.reduce((previous, group) => {
    (previous[group.answer] || (previous[group.answer] = [])).push(group);

    return previous;
  }, {});
  let answers = Object.keys(groupsByAnswer).map((key, index) => {
    let timelineItems = groupsByAnswer[key].map((group) => {
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
      <TabPane
        tab={<div className={classes.Title}>{key.split('-').join(' ')}</div>}
        key={key}>
        <Row>
          <Col span={24}>
            <Timeline mode="alternate">{timelineItems}</Timeline>
          </Col>
        </Row>
      </TabPane>
    );
  });

  return (
    <Row>
      <Col span={24}>
        <Tabs>{answers}</Tabs>
      </Col>
    </Row>
  );
};

ProfessionalCulture.propTypes = {
  groups: PropTypes.array.isRequired,
  analyses: PropTypes.array.isRequired,
};
