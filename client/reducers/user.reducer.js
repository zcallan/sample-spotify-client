import { USER_AUTH_SUCCESS, USER_AUTH_FAIL } from 'constants';

const initialState = {
  authenticated: false,
  data: {},
  error: null,
};

export default ( state = initialState, { type, payload }) => {
  switch ( type ) {
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        data: payload,
      };

    case USER_AUTH_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
