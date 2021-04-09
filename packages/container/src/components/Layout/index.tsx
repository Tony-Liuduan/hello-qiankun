import React, { FC } from 'react';
import {
    Link,
    useLocation
} from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Content, Footer, Sider } = Layout;

const LayoutComponent: FC = props => {
    const location = useLocation();
    return <Layout style={{ height: '100vh' }}>
        <Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname || '/app-react']}>
                <Menu.Item key="/app-react">
                    <Link to='/app-react'>react</Link>
                </Menu.Item>
                <Menu.Item key="/app-angular">
                    <Link to='/app-angular'>angular</Link>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Content style={{ padding: '24px 50px', backgroundColor: '#fff' }}>
                {props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>探索 qiankun</Footer>
        </Layout>
    </Layout >
}

export default LayoutComponent;