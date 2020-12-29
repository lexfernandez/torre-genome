import React, {useCallback} from 'react';
import {Button, Col, Form, Input, Row} from 'antd';
import {useHistory} from 'react-router-dom';
import Card from '../card';

export const UsernameForm = () => {
  let history = useHistory();
  const onFinish = useCallback((values) => {
    history.push(`/my-genome/${values.username}`);
  });

  return (
    <Row>
      <Col span={24}>
        <Row justify="center">
          <Col xs={24} sm={24} md={12} xl={8}>
            <Card>
              <Form onFinish={onFinish}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'a username is required to proceed!',
                      transform: (username) => username.trim(),
                    },
                  ]}>
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    View Genome
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
