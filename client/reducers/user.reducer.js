import { USER_AUTH_SUCCESS } from 'constants';

const initialState = {
  authenticated: false,
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
      };

    default:
      return state;
  }
};
