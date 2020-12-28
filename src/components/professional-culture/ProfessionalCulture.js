import React, {useState, useEffect} from 'react';
import classes from './ProfessionalCulture.module.css';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';

export const ProfessionalCulture = ({groups, analyses}) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let resultList = groups.reduce((previous, current) => {
      let groupResults = analyses.filter(
        (analysis) => analysis.groupId === current.id,
      );
      return previous.concat({...current, analyses: groupResults});
    }, []);

    setResults(resultList);
    console.log(resultList);
  }, [groups, analyses]);

  return (
    <Row>
      <Col span={24}>
        {results.map((result) => (
          <div>
            {result.text}
            <div>
              {result.analyses.map((analysis) => (
                <div>
                  -{analysis.section}({analysis.analysis})
                </div>
              ))}
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};

ProfessionalCulture.propTypes = {
  groups: PropTypes.array.isRequired,
  analyses: PropTypes.array.isRequired,
};
