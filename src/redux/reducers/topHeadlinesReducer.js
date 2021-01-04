// eslint-disable-next-line import/named
import { LOAD_TOP_HEADLINES_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default function topHeadlinesReducer(state = initialState.topHeadlines, action) {
  switch (action.type) {
    case LOAD_TOP_HEADLINES_SUCCESS:
      return action.topHeadlines;
    default:
      return state;
  }
}
