import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Tooltip, Row, Col, Badge} from 'antd';
import {PersonContext} from '../../contexts';
import {getFirstName} from '../../utils';
import classes from './ProfessionalCulture.module.css';

const responseToValue = (answer) => {
  switch (answer) {
    case 'all-the-time':
      return 4;
    case 'most-of-the-time':
      return 3;
    case 'sometimes':
      return 2;
    case 'rarely':
      return 1;
    default:
      return 0;
  }
};

export const Result = ({group, analyses}) => {
  const person = useContext(PersonContext);
  let total = responseToValue(group.answer);

  let validAnalyses = analyses
    .filter((result) => result.analysis > 0)
    .map((result) => ({
      ...result,
      percentage: +((result.analysis * 100) / total).toFixed(2),
    }))
    .sort((a, b) => (a.percentage > b.percentage ? -1 : 1));

  let tooltipDetails = <div>no results</div>;
  if (validAnalyses.length) {
    tooltipDetails = (
      <Row>
        <Col span={24}>
          <Row>
            <Col>
              {group.text} is charasteristic of {getFirstName(person.name)}{' '}
              {group.answer}
            </Col>
          </Row>
          <Row>
            <Col>
              This trait reveals a correlation with the folloring culture
              dynamics:
            </Col>
          </Row>
          {validAnalyses.map(({section, analysis, percentage}, index) => {
            return (
              <Row key={index}>
                <Col span={24}>
                  <Badge
                    color="#f50"
                    text={
                      <span className={classes.Title}>
                        {section.split('-').join(' ')}: {percentage}%
                      </span>
                    }
                  />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Tooltip title={tooltipDetails}>{group.text}</Tooltip>
    </>
  );
};

Result.propTypes = {
  group: PropTypes.object.isRequired,
  analyses: PropTypes.array.isRequired,
};
