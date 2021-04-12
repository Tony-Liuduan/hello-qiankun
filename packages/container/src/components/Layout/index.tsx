import React, { FC } from 'react';
import {
    // Link,
    useHistory,
    // useLocation
} from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Content, Header } = Layout;

const LayoutComponent: FC = props => {
    // const location = useLocation();
    const history = useHistory();

    function handleClick() {
        history.push("/app-react/demo/use/memo");
    }

    function handleClickAngular() {
        history.push("/app-angular/bose");
    }
    return <Layout>
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/app-react']}>
                <Menu.Item key="/app-react">
                    <a href="javascript:void(0)" onClick={handleClick}>app-react-memo by history push</a>
                    {/* <Link to='/app-react'>react</Link> */}
                </Menu.Item>
                <Menu.Item key="/app-angular">
                    <a href="javascript:void(0)" onClick={handleClickAngular}>app-anglar by history push</a>
                    {/* <Link to='/app-angular'>angular</Link> */}
                </Menu.Item>
            </Menu>
        </Header>
        <Content style={{ backgroundColor: '#fff', overflow: 'auto', marginTop: '10px' }}>
            {props.children}
        </Content>
    </Layout >
}

export default LayoutComponent;