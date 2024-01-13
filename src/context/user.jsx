import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { userReducer, userInitialState } from '../reducers/user.js'

export const UserContext = createContext();

function useUserReducer () {
  const [state, dispatch] = useReducer(userReducer, userInitialState)

  const addMessage = message => dispatch({
    type: 'ADD_MESSAGE',
    payload: {message}
  })

  const removeMessage = id => dispatch({
    type: 'REMOVE_MESSAGE',
    payload: id
  })

  const setUser = user => dispatch({
    type: 'SET_USER',
    payload: {user}
  })

  const clearUser = () => dispatch({ type: 'CLEAR_USER' })

  return { state, addMessage, removeMessage, setUser, clearUser }
}

export function UserProvider ({ children }) {

  const { state, addMessage, removeMessage, setUser, clearUser } = useUserReducer()

  return (
    <UserContext.Provider value={{
      user: state, 
      addMessage, 
      removeMessage,
      setUser, 
      clearUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}

