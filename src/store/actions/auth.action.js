import { URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from '../../utils/api';
import { authType } from '../types';

const { SIGNUP, SIGNIN } = authType;

export default {
  signup: (email, password) => {
    return async (dispatch) => {
      try {
        const response = await fetch(URL_AUTH_SIGNUP, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        });

        const result = await response.json();

        console.warn(result);

        dispatch({
          type: SIGNUP,
          token: result.idToken,
          userId: result.localId,
        });
      } catch (error) {
        console.warn(error);
      }
    };
  },

  signin: (email, password) => {
    return async (dispatch) => {
      const response = await fetch(URL_AUTH_SIGNIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      console.warn(result);

      dispatch({
        type: SIGNIN,
        token: result.idToken,
        userId: result.localId,
      });
    };
  },
};
