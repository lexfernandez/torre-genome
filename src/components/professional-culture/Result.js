import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip} from 'antd';

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
    tooltipDetails = validAnalyses.map(({section, analysis, percentage}) => {
      return (
        <div key={analysis.section}>
          -{section}({percentage}%)
        </div>
      );
    });
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
