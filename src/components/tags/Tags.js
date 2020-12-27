import React from 'react';
import PropTypes from 'prop-types';
import {Tag, Row, Col} from 'antd';
import classes from './Tags.module.css';

export const Tags = ({
  items,
  editable,
  handleDelete,
  renderItem,
  itemKey,
  onClick,
  sort,
}) => {
  console.log(itemKey);
  let tags = items.sort(sort).map((item) => (
    <Tag
      key={itemKey(item)}
      closable={editable}
      onClose={() => handleDelete(item)}
      onClick={() => onClick(item)}>
      {renderItem(item)}
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

Tags.propTypes = {
  editable: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  itemKey: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  sort: PropTypes.func,
};

Tags.defaultProps = {
  editable: false,
  handleDelete: (skill) => null,
  items: [],
  renderItem: (item) => item.name,
  itemKey: (item) => item.id,
  onClick: (item) => null,
  sort: (first, second) => {
    if (!(first.name && second.name)) return 0;
    if (first.name.length > second.name.length) return 1;
    if (first.name.length < second.name.length) return -1;
    return 0;
  },
};
