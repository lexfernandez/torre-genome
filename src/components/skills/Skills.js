import React from 'react';
import PropTypes from 'prop-types';
import {Tag, Row, Col} from 'antd';
import classes from './Skills.module.css';

export const Skills = ({skills, editable, handleDelete}) => {
  let tags = skills
    .sort((first, second) => {
      if (first.name.length > second.name.length) return 1;
      if (first.name.length < second.name.length) return -1;
      return 0;
    })
    .map((skill) => (
      <Tag
        key={skill.id}
        closable={editable}
        onClose={() => handleDelete(skill)}
        onClick={() => alert(skill.name)}>
        {skill.name}
      </Tag>
    ));

  return (
    <Row>
      <Col span={24} className={classes.Tags}>
        {tags}
      </Col>
    </Row>
  );
};

Skills.propTypes = {
  editable: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      additionalInfo: PropTypes.string,
      weight: PropTypes.number,
      recommendations: PropTypes.number,
      created: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Skills.defaultProps = {
  editable: false,
  handleDelete: (skill) => null,
};
