import React, {useState, Suspense, lazy} from 'react';
import {Layout, Row} from 'antd';
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
import Loading from '../../components/loading';

const Genome = lazy(() => import('../genome'));
const UsernameForm = lazy(() => import('../../components/username-form'));

const {Header, Sider, Content} = Layout;

const Main = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <Layout className={classes.Main}>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <Row align="middle" justify="center" style={{padding: '20px'}}>
          <Logo className={classes.Logo} />
        </Row>
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
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/my-genome/:username" component={Genome} />
              <Route path="/my-genome/" component={UsernameForm} />
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
