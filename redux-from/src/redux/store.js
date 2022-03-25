import { createStore } from "redux";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;

// middleware= logger is middleWare middleware give extra feature to redux
// /thunk allow the function to return a function in action
