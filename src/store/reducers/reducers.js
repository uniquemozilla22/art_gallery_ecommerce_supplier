import { combineReducers } from "redux";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import ModalReducer from "./Modal/Modal.reducer";

const reducers = combineReducers({
  modal: ModalReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
