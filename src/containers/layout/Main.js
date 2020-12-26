import React, {useCallback, useState} from 'react';
import {Layout} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import classes from './Main.module.css';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const {Header, Sider, Content} = Layout;

const Main = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => {
    setCollapsed(!isCollapsed);
  });

  return (
    <Layout className={classes.Main}>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className={classes.CenterText}>
          <Logo className={classes.Logo} />
        </div>
        menu
      </Sider>
      <Layout>
        <Header>
          {React.createElement(
            isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            },
          )}
        </Header>
        <Content>content</Content>
      </Layout>
    </Layout>
  );
};

export default Main;
