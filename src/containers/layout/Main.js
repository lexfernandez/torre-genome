import React, {useState, Suspense, lazy} from 'react';
import {Layout, Spin} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import classes from './Main.module.css';
import {Menu} from 'antd';
import {
  SearchOutlined,
  LaptopOutlined,
  NotificationOutlined,
  CommentOutlined,
  DeploymentUnitOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {Link, Switch, Route} from 'react-router-dom';
const Genome = lazy(() => import('../../components/genome'));

const {Header, Sider, Content} = Layout;

const Main = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!isCollapsed);
  };

  let loading = (
    <div className={classes.CenterText}>
      <Spin />
    </div>
  );

  return (
    <Layout className={classes.Main}>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className={classes.CenterText}>
          <Logo className={classes.Logo} />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['signal']}>
          <Menu.Item key="genome" icon={<UserOutlined />}>
            <Link to="/my-genome">My genome</Link>
          </Menu.Item>
          <Menu.Item key="search" icon={<SearchOutlined />}>
            <Link to="/search">Search</Link>
          </Menu.Item>
          <Menu.Item key="jobs" icon={<LaptopOutlined />}>
            <Link to="/jobs">Jobs</Link>
          </Menu.Item>
          <Menu.Item key="notifications" icon={<NotificationOutlined />}>
            <Link to="/notifications">Notifications</Link>
          </Menu.Item>
          <Menu.Item key="messages" icon={<CommentOutlined />}>
            <Link to="/messages">Messages</Link>
          </Menu.Item>

          <Menu.Item key="signal" icon={<DeploymentUnitOutlined />}>
            <Link to="/signal">Signal</Link>
          </Menu.Item>
        </Menu>
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
        <Content className={classes.Content}>
          <Suspense fallback={loading}>
            <Switch>
              <Route path="/my-genome" component={Genome} />
              <Route path="/search" component={Genome} />
              <Route path="/jobs" component={Genome} />
              <Route path="/notifications" component={Genome} />
              <Route path="/messages" component={Genome} />
              <Route path="/signal" component={Genome} />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
