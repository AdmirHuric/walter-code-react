import { handleResponse, handleError } from "./apiUtils";
const baseUrl = `${process.env.API_URL}/top-headlines?country=${process.env.COUNTRY}`;

export function getTopHeadlines(pageSize) {
  return fetch(`${baseUrl}&pageSize=${pageSize}`, {
    headers: { "authorization": `Bearer ${process.env.API_KEY}` },
  })
    .then(handleResponse)
    .catch(handleError);
}
