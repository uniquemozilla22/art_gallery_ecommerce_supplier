import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "cookies-js";
import ModalReducer from "./Modal/Modal.reducer";
import MessageReducer from "./Message/Message.reducer";

const reducers = combineReducers({
  modal: ModalReducer,
  message: MessageReducer,
});

const persistConfig = {
  key: "root",
  storage: new CookieStorage(Cookies /*, options */),
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
