import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../../context/user";
import { theme, Empty } from "antd";
import "./Conversation.css";
import isEmpty from "lodash/isEmpty";

export function Conversation() {
  const { user } = useContext(UserContext);
  const chatContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    user && setMessages(user.messages);
  }, [user]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  if (!user) {
    return (
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={<span>Seleccione un usuario</span>}
      ></Empty>
    );
  }
  console.log(user);
  if (user && isEmpty(user.messages)) {
    return (
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={<span>Enviale un mensaje a {user.name}</span>}
      ></Empty>
    );
  }

  return (
    <div
      className="conversation-container"
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
      ref={chatContainerRef}
    >
      {messages.map((message, index) => (
        <div key={index} className="message-list">
          <p>
            <strong>{message.with}:</strong>
            {message.message}
          </p>
        </div>
      ))}
    </div>
  );
}
