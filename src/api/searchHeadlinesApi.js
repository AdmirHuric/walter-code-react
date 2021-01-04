import { handleResponse, handleError } from "./apiUtils";
const baseUrl = `${process.env.API_URL}/everything`;

export function searchHeadlines(searchTerm, pageSize, sortBy) {
  return fetch(`${baseUrl}?q=${searchTerm}&pageSize=${pageSize}&sortBy=${sortBy}`, {
    headers: { "authorization": `Bearer ${process.env.API_KEY}` },
  })
    .then(handleResponse)
    .catch(handleError);
}
