import { ERROR, HIDE_MESSAGE, SUCCESS, WARNING } from "../../Types";

const initialState = {
  show: false,
  info: {
    title: "",
    message: "",
    alert: SUCCESS,
  },
};

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR: {
      return {
        ...state,
        show: true,
        info: {
          message: action.payload.message,
          title: action.payload.title,
          alert: ERROR,
        },
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        show: false,
      };
    }

    case SUCCESS: {
      return {
        ...state,
        show: true,
        info: {
          message: action.payload.message,
          title: action.payload.title,
          alert: SUCCESS,
        },
      };
    }

    case WARNING: {
      return {
        ...state,
        show: true,
        info: {
          message: action.payload.message,
          title: action.payload.title,
          alert: WARNING,
        },
      };
    }

    default:
      return state;
  }
};

export default MessageReducer;
