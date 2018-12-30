import { createStore } from "redux";
import rootReducer from "./../reducers/reducers";
import { selectView, views } from "./../actions/actions";

const store = createStore(rootReducer);

console.log(store.getState());
