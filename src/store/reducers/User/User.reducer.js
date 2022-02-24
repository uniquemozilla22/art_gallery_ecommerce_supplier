import { LOGIN } from "../../Types";

const initialState = {
  token: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};

export default UserReducer;
