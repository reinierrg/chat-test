import PropTypes from "prop-types";
import User from "../User/User";

function Users({ users }) {
 
  return (
    <div>
      {users.map(({ userName, name, id, messages }) => (
        <User
          key={userName}
          id={id}
          userName={userName}
          messages={messages}
          name={name}
        />
      ))}
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Users;
