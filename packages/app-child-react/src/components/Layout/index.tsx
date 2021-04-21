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
            <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
                <Menu.Item key="/app-angular">
                    <Link to='/app-angular'>app-angular</Link>
                </Menu.Item>
                <Menu.Item key="/counter">
                    <Link to='/counter'>counter</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/state">
                    <Link to='/app-react/use/state'>app-react/useState</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/effect">
                    <Link to='/app-react/use/effect'>app-react/useEffect</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/ref">
                    <Link to='/app-react/use/ref'>app-react/useRef</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/previous">
                    <Link to='/app-react/use/previous'>app-react/usePrevious</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/force-update">
                    <Link to='/app-react/use/force-update'>app-react/useForceUpdate</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/redux">
                    <Link to='/app-react/use/redux'>app-react/useRedux</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/context">
                    <Link to='/app-react/use/context'>app-react/useContext</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/memo">
                    <Link to='/app-react/use/memo'>app-react/useMemo</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/callback">
                    <Link to='/app-react/use/callback'>app-react/useCallback</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/event-callback">
                    <Link to='/app-react/use/event-callback'>app-react/useEventCallback</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/client-rect">
                    <Link to='/app-react/use/client-rect'>app-react/useClienRect</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/imperative-handle">
                    <Link to='/app-react/use/imperative-handle'>app-react/useImperativeHandle</Link>
                </Menu.Item>
                <Menu.Item key="/app-react/use/debug-value">
                    <Link to='/app-react/use/debug-value'>app-react/useDebugValue</Link>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Content style={{ padding: '24px 50px', backgroundColor: '#fff' }}>
                {props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>探索 react-hook</Footer>
        </Layout>
    </Layout >
}

export default LayoutComponent;