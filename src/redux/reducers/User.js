import * as userActions from '../actions/User';

const initialState = {
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.TYPE_SET_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    case userActions.TYPE_REMOVE_USER: {
      return {
        ...state,
        user: null
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
