import React, { FC } from 'react';
import {
    // Link,
    useHistory, useLocation,
    // useLocation
} from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Content, Header } = Layout;

const LayoutComponent: FC = props => {
    // const location = useLocation();
    const history = useHistory();

    const location = useLocation();

    function handleClick() {
        history.push("/#/app-react/demo/use/memo");
    }

    function handleClickAngular() {
        history.push("/app-angular/bose");
    }

    return <Layout>
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname || '/app-react/demo/use/memo']}>
                <Menu.Item key="/app-react/demo/use/memo">
                    <a href={undefined} onClick={handleClick}>app-react-memo by history push</a>
                    {/* <Link to='/app-react'>react</Link> */}
                </Menu.Item>
                <Menu.Item key="/app-angular/bose">
                    <a href={undefined} onClick={handleClickAngular}>app-anglar by history push</a>
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