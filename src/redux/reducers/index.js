import { combineReducers } from "redux";
import topHeadlines from "./topHeadlinesReducer";
import article from "./articleReducer";
import apiCallLoading from "./apiCallLoadingReducer";
import searchHeadlines from "./searchHeadlinesReducer";

const rootReducer = combineReducers({
  topHeadlines,
  searchHeadlines,
  article,
  apiCallLoading
});

export default rootReducer;
