import React, {useState, useEffect} from 'react';
import classes from './PersonalityTraits.module.css';
import PropTypes from 'prop-types';
import {Row} from 'antd';

export const PersonalityTraits = ({groups, analyses}) => {
  const [results, setResults] = useState([{}]);

  useEffect(() => {
    let analysisList = groups.reduce((previous, current) => {
      let {analysis} = analyses
        .filter((analysis) => analysis.groupId === current.id)
        .pop();
      return previous.concat({...current, analysis});
    }, []);

    setResults(analysisList);
  }, [groups, analyses]);

  return (
    <Row>
      {results.map((result) => (
        <div>
          {result.id}= {result.analysis} ({result.median}+-{result.stddev})
        </div>
      ))}
    </Row>
  );
};

PersonalityTraits.propTypes = {
  groups: PropTypes.array.isRequired,
  analyses: PropTypes.array.isRequired,
};
