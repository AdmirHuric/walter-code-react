// eslint-disable-next-line import/named
import { SEARCH_HEADLINES_SUCCESS } from "./actionTypes";
import { setApiCallLoading } from "./apiCallsActions";
import * as searchHeadlinesApi from "../../api/searchHeadlinesApi";

export function searchHeadlinesSuccess(searchHeadlines) {
  return { type: SEARCH_HEADLINES_SUCCESS, searchHeadlines };
}

export function searchHeadlinesByTerm(searchTerm, pageSize, sortBy) {
  return function(dispatch) {
    dispatch(setApiCallLoading(true));
    return searchHeadlinesApi
      .searchHeadlines(searchTerm, pageSize, sortBy)
      .then(searchHeadlines => {
        dispatch(searchHeadlinesSuccess(searchHeadlines));
        dispatch(setApiCallLoading(false));
      })
      .catch(error => {
        dispatch(setApiCallLoading(false));
        throw error;
      });
  };
}
