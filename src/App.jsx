import Channels from "./component/Channels/Channels";
import { Conversation } from "./component/Conversation/Conversation";
import  { Layout, theme} from 'antd';

import "./App.css";
import { InputSend } from "./component/InputSend/InputSend";
import { useChannels } from "./hooks/useChannels";
const { Sider, Content, Footer} = Layout;

export default function App () {

  const {channels} = useChannels();

  const { token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Channels channels={channels}/>
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Content
         style={{
          overflow: 'auto',
          position: 'relative',
          height: 'calc(100vh - 62px)',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
        >
        
         <Conversation />

        </Content>
        <Footer style={{
          overflow: 'auto',
          position: 'fixed',
          margin: 0,
          padding: 15,
          width: 'calc(100% -  200px)',
          bottom: 0,
        }}>
            <InputSend/>
        </Footer>
      </Layout>
    </Layout>
  );
}