import { Input, Button } from "antd";
import './InputSend.css';
import { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import isEmpty from 'lodash/isEmpty';

export function InputSend() {
    const [message, setMessage] = useState("");

  const {addMessage} = useContext(UserContext);

  const handlerChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  const handlerSendMessage= () => {
    if (!isEmpty(message)){
        let idMessage = `${Math.floor(Math.random() * 999999)}`;
        
        addMessage({
            id: idMessage,
            with: "me",
            message: message
        });

        setMessage('');
    }
  }

  return (
    <div className="input-send">
      <Input value={message} onChange={handlerChangeMessage}></Input>
      <Button onClick={handlerSendMessage}>Enviar</Button>
    </div>
  );
}
