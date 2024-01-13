import PropTypes from "prop-types";
import Users from "../Users/Users";
import { Collapse, theme} from 'antd';

const {Panel} = Collapse;
import './Channels.css';
function Channels({ channels }) {

  const handerchange = ()=> {

  }

  const { token: { colorBgContainer, borderRadiusLG, colorText },
} = theme.useToken();

  return (
    <div>
      {channels.map((channel) => (
         <Collapse key={channel.id} defaultActiveKey={['1']} onChange={handerchange}  style={{
        
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}>
          <Panel header={channel.name} style={{
        color: colorText,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}>
            <Users users={channel.users} />
          </Panel>
        </Collapse>
      ))}
    </div>
  );
}

Channels.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object),
};

export default Channels;
