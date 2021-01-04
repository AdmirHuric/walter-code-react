// eslint-disable-next-line import/named
import { SET_CURRENT_ARTICLE } from "../actions/actionTypes";
import initialState from "./initialState";

export default function articleReducer(state = initialState.article, action) {
  switch (action.type) {
    case SET_CURRENT_ARTICLE:
      return action.article;
    default:
      return state;
  }
}
