import * as systemAction from '../actions/System';

const initialState = {
  loading: false,
  error: null
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case systemAction.TYPE_SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case systemAction.TYPE_CLEAR_ERROR: {
      return {
        ...state,
        error: null
      };
    }
    case systemAction.TYPE_SET_LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    default:
      return state;
  }
};

export default systemReducer;
