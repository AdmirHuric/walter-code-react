// eslint-disable-next-line import/named
import { SEARCH_HEADLINES_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchHeadlinesReducer(state = initialState.searchHeadlines, action) {
  switch (action.type) {
    case SEARCH_HEADLINES_SUCCESS:
      return action.searchHeadlines;
    default:
      return state;
  }
}
