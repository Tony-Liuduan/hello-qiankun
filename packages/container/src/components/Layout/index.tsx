import React, { FC } from 'react';
import {
    Link,
    useLocation,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Content, Header } = Layout;

const LayoutComponent: FC = props => {
    const location = useLocation();

    return <Layout>
        <Header>
            <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname.split('/')[1]]}>
                <Menu.Item key="app-react">
                    <Link to='/app-react'>app-react</Link>
                </Menu.Item>
                <Menu.Item key="app-angular">
                    <Link to='/app-angular'>app-angular</Link>
                </Menu.Item>
            </Menu>
        </Header>
        <Content style={{ backgroundColor: '#fff', overflow: 'auto', marginTop: '10px' }}>
            {props.children}
        </Content>
    </Layout >
}

export default LayoutComponent;