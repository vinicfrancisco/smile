export const Types = {
  GET_LOGGED_REQUEST: 'user/GET_LOGGED_REQUEST',
  GET_LOGGED_SUCCESS: 'user/GET_LOGGED_SUCCESS',
  GET_LOGGED_FAILURE: 'user/GET_LOGGED_FAILURE',
};

const initialState = {
  logged: {
    data: {},
    loading: true,
  },
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.GET_LOGGED_REQUEST:
      return {
        ...state,
        logged: {
          ...state.logged,
          loading: true,
        },
      };
    case Types.GET_LOGGED_SUCCESS:
      return {
        ...state,
        logged: {
          ...state.logged,
          loading: false,
          data: action.payload.user,
        },
      };
    case Types.GET_LOGGED_FAILURE:
      return {
        ...state,
        logged: {
          ...state.logged,
          loading: false,
        },
      };
    default:
      return state;
  }
}

export const Creators = {
  getUserLoggedRequest: () => ({
    type: Types.GET_LOGGED_REQUEST,
  }),

  getUserLoggedSuccess: user => ({
    type: Types.GET_LOGGED_SUCCESS,
    payload: { user },
  }),

  getUserLoggedFailure: () => ({
    type: Types.GET_LOGGED_FAILURE,
  }),
};
