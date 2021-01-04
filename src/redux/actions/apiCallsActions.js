// eslint-disable-next-line import/named
import { SET_API_CALL_LOADING } from "./actionTypes";

export function setApiCallLoading(loading) {
  return { type: SET_API_CALL_LOADING, loading };
}
