export const userInitialState = JSON.parse(window.localStorage.getItem('user')) || {}

export const USER_ACTION_TYPES = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  REMOVE_MESSAGE: 'REMOVE_MESSAGE',
  SET_USER: 'SET_USER',
  CLEAR_USER: 'CLEAR_USER',
}

// update localStorage with state for user
export const updateLocalStorage = state => {
  window.localStorage.setItem('user', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [USER_ACTION_TYPES.ADD_MESSAGE]: (state, action) => {
    const { message } = action.payload
    const newMessages = [...state.messages, {...message}];
    const newState = {...state, messages: newMessages};

    updateLocalStorage(newState)
    return newState
  },
  [USER_ACTION_TYPES.REMOVE_MESSAGE]: (state, action) => {
    const { id } = action.payload
    const messages = state.messages.filter(item => item.id !== id)
    const newState = {...state, messages};
    updateLocalStorage(newState)
    return newState
  },
  [USER_ACTION_TYPES.SET_USER]: (state, action) => {
    const { user } = action.payload
    const newState = {...user};
    updateLocalStorage(newState)
    return newState
  },
  [USER_ACTION_TYPES.CLEAR_USER]: () => {
    updateLocalStorage([])
    return []
  }
  
}

export const userReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
