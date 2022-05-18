import { LOGIN, LOGOUT } from "../../Types";

const initialState = {
  token: null,
  username: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
      };

    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default UserReducer;
