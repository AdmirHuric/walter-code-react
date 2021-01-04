// eslint-disable-next-line import/named
import { LOAD_TOP_HEADLINES_SUCCESS } from "./actionTypes";
import { setApiCallLoading } from "./apiCallsActions";
import * as topHeadlinesApi from "../../api/topHeadlinesApi";

export function loadTopHeadlinesSuccess(topHeadlines) {
  return { type: LOAD_TOP_HEADLINES_SUCCESS, topHeadlines };
}

export function loadTopHeadlines(pageSize) {
  return function(dispatch) {
    dispatch(setApiCallLoading(true));
    return topHeadlinesApi
      .getTopHeadlines(pageSize)
      .then(topHeadlines => {
        dispatch(loadTopHeadlinesSuccess(topHeadlines));
        dispatch(setApiCallLoading(false));
      })
      .catch(error => {
        dispatch(setApiCallLoading(false));
        throw error;
      });
  };
}
