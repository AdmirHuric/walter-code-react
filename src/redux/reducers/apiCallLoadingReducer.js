// eslint-disable-next-line import/named
import { SET_API_CALL_LOADING } from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallLoadingReducer(state = initialState.apiCallLoading, action) {
  switch (action.type) {
    case SET_API_CALL_LOADING:
      return action.loading;
    default:
      return state;
  }
}
