import React, {useState, useEffect} from 'react';
import classes from './PersonalityTraits.module.css';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';
import HexGraph from '../hex-graph';

export const PersonalityTraits = ({groups, analyses}) => {
  const [results, setResults] = useState([]);
  const [visibleResult, setVisibleResult] = useState(0);

  useEffect(() => {
    let analysisList = groups.reduce((previous, current) => {
      let {analysis} = analyses
        .filter((analysis) => analysis.groupId === current.id)
        .pop();
      return previous.concat({...current, analysis});
    }, []);

    setResults(analysisList);
  }, [groups, analyses]);

  let detail = null;
  if (results.length && visibleResult != null) {
    console.log(results);
    let result = results[visibleResult];

    detail = (
      <div key={result.id}>
        {result.id}= {result.analysis} ({result.median}+-{result.stddev})
      </div>
    );
  }

  return (
    <Row justify="center">
      <Col span={24} className={classes.PersonalityTraitsHex}>
        <HexGraph
          onClick={(index) => setVisibleResult(index)}
          onHover={(index) => setVisibleResult(index)}
          initialPosition={-60}
          pieces={results.length}
        />
      </Col>
      {detail}
    </Row>
  );
};

PersonalityTraits.propTypes = {
  groups: PropTypes.array.isRequired,
  analyses: PropTypes.array.isRequired,
};
