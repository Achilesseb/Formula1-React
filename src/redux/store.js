import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import data from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(data, composeEnhancer(applyMiddleware(thunk)));

export default store;
