import { LOGIN, LOGOUT } from "../../Types";

const initialState = {
  token: null,
  username: null,
  image: null,
  email: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        image: action.payload.image,
        email: action.payload.email,
      };

    case LOGOUT:
      return {
        ...state,
        token: null,
        username: null,
        image: null,
        email: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
