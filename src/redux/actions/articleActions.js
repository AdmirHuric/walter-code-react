import { SET_CURRENT_ARTICLE } from "./actionTypes";

export function setCurrentArticle(article) {
  return { type: SET_CURRENT_ARTICLE, article };
}
