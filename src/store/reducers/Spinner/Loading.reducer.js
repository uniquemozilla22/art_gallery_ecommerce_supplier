import { HIDE_LOADING, SHOW_LOADING } from "../../Types";

const initialState = {
  show: false,
};

const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING: {
      return { ...state, show: true };
    }
    case HIDE_LOADING: {
      return { ...state, show: false };
    }
    default: {
      return state;
    }
  }
};

export default LoaderReducer;
