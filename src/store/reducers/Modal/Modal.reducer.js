import { SIDEBAR__TOGGLE } from "../../Types";

const initialState = {
  sidebar: false,
};

const ModalReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SIDEBAR__TOGGLE:
      return { ...state, sidebar: !state.sidebar };
    default:
      return state;
  }
};

export default ModalReducer;
