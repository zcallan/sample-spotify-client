import { USER_AUTH_ATTEMPT, USER_AUTH_SUCCESS, USER_AUTH_FAIL } from 'constants/user';


export const userAuthAttempt = () => ({
  type: USER_AUTH_ATTEMPT,
});

export const userAuthSuccess = data => ({
  type: USER_AUTH_SUCCESS,
  payload: data,
});

export const userAuthFail = error => ({
  type: USER_AUTH_FAIL,
  payload: error,
});
