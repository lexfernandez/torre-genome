import React, {useState, useEffect} from 'react';
import classes from './PersonalityTraits.module.css';
import PropTypes from 'prop-types';
import {Row, Col, Tooltip} from 'antd';
import HexGraph from '../hex-graph';
import {ReactComponent as Extraversion} from '../../assets/extraversion.svg';
import {ReactComponent as Agreeableness} from '../../assets/agreeableness.svg';
import {ReactComponent as Emotionality} from '../../assets/emotionality.svg';
import {ReactComponent as Conscientiousness} from '../../assets/conscientiousness.svg';
import {ReactComponent as HonestyHumility} from '../../assets/honesty-humility.svg';
import {ReactComponent as OpennessToExperience} from '../../assets/openness-to-experience.svg';
import {Arrow} from './Arrow';
import {InfoCircleOutlined} from '@ant-design/icons';

const getNormalDistribution = (trait) => {
  switch (trait) {
    case 'openness-to-experience':
      return <OpennessToExperience width="100%" height="100%" />;
    case 'honesty-humility':
      return <HonestyHumility width="100%" height="100%" />;
    case 'agreeableness':
      return <Agreeableness width="100%" height="100%" />;
    case 'conscientiousness':
      return <Conscientiousness width="100%" height="100%" />;
    case 'emotionality':
      return <Emotionality width="100%" height="100%" />;
    case 'extraversion':
      return <Extraversion width="100%" height="100%" />;
    default:
      return null;
  }
};

const normalDistribution = {
  extraversion: {
    left: 'Solitary / reserved',
    rigth: 'Outgoing / energetic',
    graph: Extraversion,
  },
  'openness-to-experience': {
    left: 'Consistent / cautious',
    rigth: 'Inventive / curious',
    graph: OpennessToExperience,
  },
  conscientiousness: {
    left: 'Easy-going / spontaneous',
    rigth: 'Efficient / organized',
    graph: Conscientiousness,
  },
  agreeableness: {
    left: 'Competitive / argumentative',
    rigth: 'Friendly / compassionate',
    graph: Agreeableness,
  },
  'honesty-humility': {
    left: 'Sly / avaricious',
    rigth: 'Sincere / modest',
    graph: HonestyHumility,
  },
  emotionality: {
    left: 'Secure / confident',
    rigth: 'Sensitive / nervous',
    graph: Emotionality,
  },
};

const getAnalisiPercentage = (analysis) => {
  return (100 * analysis) / 5;
};

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
    let result = results[visibleResult];
    let percentage = getAnalisiPercentage(result.analysis);

    let Graph = normalDistribution[result.id].graph;
    detail = (
      <Row key={result.id}>
        <Col span={24}>
          <Row className={[classes.Trait, classes.AlignTextCenter]}>
            <Col span={24} style={{wordBreak: 'keep-all'}}>
              {` ${result.id.split('-').join(' ')} `}
              <Tooltip
                title={`When 0 totally ${
                  normalDistribution[result.id].left
                } and 5 totally ${normalDistribution[result.id].rigth}`}>
                <InfoCircleOutlined />
              </Tooltip>
            </Col>
          </Row>
          <Row className={classes.AlignTextCenter}>
            <Col span={4} className={[classes.AlignTextLeft, classes.Small]}>
              {normalDistribution[result.id].left}
            </Col>
            <Col span={16}>
              <Arrow
                position={percentage}
                rotate={180}
                className={classes.Arrow}
                height="100%"
              />
              <Graph width="100%" height="100%" />
            </Col>
            <Col span={4} className={[classes.AlignTextRigth, classes.Small]}>
              {normalDistribution[result.id].rigth}
            </Col>
          </Row>
          <Row>
            <div className={classes.Details}>Score:</div> {`${result.analysis}`}
          </Row>
          <Row>
            <div className={classes.Details}>Global Median:</div>{' '}
            {result.median}
          </Row>
          <Row>
            <div className={classes.Details}>Standar deviation:</div>{' '}
            {result.stddev}
          </Row>
          <Row>
            <div className={classes.Details}>
              Divergence from global median:
            </div>{' '}
            {(result.analysis - result.median).toFixed(2)}
          </Row>
          {/* <Row>Normal distribuition for personality trait</Row> */}
        </Col>
        {/* {result.id}= {result.analysis} ({result.median}+-{result.stddev}) */}
      </Row>
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
