import React from 'react';
import PropTypes from 'prop-types';
import {Tag, Row, Col} from 'antd';
export const Skills = ({skills, editable, handleDelete}) => {
  let tags = skills.map((skill) => (
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
      <Col span={24}>{tags}</Col>
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
      weight: PropTypes.number.isRequired,
      recommendations: PropTypes.number.isRequired,
      created: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Skills.defaultProps = {
  editable: false,
  handleDelete: (skill) => null,
};
