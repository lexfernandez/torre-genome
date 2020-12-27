import {Col, Row} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GitlabOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import classes from './MediaLinks.module.css';

const MediaIcons = {
  linkedin: <LinkedinOutlined />,
  github: <GithubOutlined />,
  instagram: <InstagramOutlined />,
  facebook: <FacebookOutlined />,
  gitlab: <GitlabOutlined />,
  '': <LinkOutlined />,
};

export const MediaLinks = ({links}) => {
  let mediaLinks = links.map((link) => (
    <Col key={link.id} className={classes.Link}>
      <a href={link.address} target="_blank" rel="noreferrer">
        {MediaIcons[link.name]}
      </a>
    </Col>
  ));

  return (
    <Row wrap={false} justify="center">
      {mediaLinks}
    </Row>
  );
};

MediaLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
