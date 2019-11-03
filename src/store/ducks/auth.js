export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',

  SIGNUP_REQUEST: 'auth/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'auth/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'auth/SIGNUP_FAILURE',

  LOGOUT_REQUEST: 'auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'auth/LOGOUT_FAILURE',
};

const initialState = {
  login: {
    loading: false,
  },

  register: {
    loading: false,
  },

  logout: {
    loading: false,
  },
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
        },
      };
    case Types.LOGIN_SUCCESS:
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
        },
      };
    case Types.SIGNUP_REQUEST:
      return {
        ...state,
        register: {
          ...state.register,
          loading: true,
        },
      };
    case Types.SIGNUP_SUCCESS:
    case Types.SIGNUP_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
        },
      };
    case Types.LOGOUT_REQUEST:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: true,
        },
      };
    case Types.LOGOUT_SUCCESS:
    case Types.LOGOUT_FAILURE:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: false,
        },
      };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: data => ({
    type: Types.LOGIN_REQUEST,
    payload: { data },
  }),

  loginSuccess: () => ({
    type: Types.LOGIN_SUCCESS,
  }),

  loginFailure: () => ({
    type: Types.LOGIN_FAILURE,
  }),

  signUpRequest: data => ({
    type: Types.SIGNUP_REQUEST,
    payload: { data },
  }),

  signUpSuccess: () => ({
    type: Types.SIGNUP_SUCCESS,
  }),

  signUpFailure: () => ({
    type: Types.SIGNUP_FAILURE,
  }),

  logoutRequest: () => ({
    type: Types.LOGOUT_REQUEST,
  }),

  logoutSuccess: () => ({
    type: Types.LOGOUT_SUCCESS,
  }),

  logoutFailure: () => ({
    type: Types.LOGOUT_FAILURE,
  }),
};
