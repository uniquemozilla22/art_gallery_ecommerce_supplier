import { LOGIN, LOGOUT } from "../../Types";

const initialState = {
  token: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload.token };

    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default UserReducer;
