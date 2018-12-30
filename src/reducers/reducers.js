import { combineReducers } from "redux";

import { views, SELECT_VIEW } from "../actions/actions";

function view(state = views.CHOOSE_COCKTAILS, action) {
  switch (action.type) {
    case SELECT_VIEW:
      return action.view;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  view
});

export default rootReducer;
