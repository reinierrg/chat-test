import { useContext } from "react";
import isEmpty from 'lodash/isEmpty';
import PropTypes from "prop-types";
import "./User.css";
import { UserContext } from "../../context/user";

const User = ({ name, id, userName, messages }) => {

  const {user, setUser} = useContext(UserContext);

  const userSelected = (user && id == user.id) ? "userCard-Selected" : "userCard";
  let lastConversation = !isEmpty(messages) ? messages[messages.length - 1].message : [];

  const handlerOnSelected = () => {
    setUser({
      userName: userName,
      name: name,
      id: id,
      messages: messages,
    });
  }

  return (
    <article className={`${userSelected}`} onClick={handlerOnSelected}>
      <header className="userCard-header">
        <img
          className="userCard-avatar"
          alt={`${userName}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className="userCard-info">
          <strong>{name}</strong>
          <span className="userCard-conversation">{lastConversation}</span>
        </div>
      </header>
    </article>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object), 
  name: PropTypes.string,
};

export default User;
