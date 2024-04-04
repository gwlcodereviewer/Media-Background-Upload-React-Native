/**
 * Name: CRUD_ACTION_TYPES
 * Desc: The api curd action types
 */
export const CRUD_ACTION_TYPES = Object.freeze({
  GET: 'GET',
  ADD: 'ADD',
  EDIT: 'EDIT',
  REMOVE: 'REMOVE',
  RESET: 'RESET',
  POST: 'POST',
});

/**
 * Name: REQUEST_METHODS
 * Desc: The request methods
 */
export const REQUEST_METHODS = Object.freeze({
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
});
/**
 * Name: SERVER_ERROR
 * Desc: The server error
 */
export const SERVER_ERROR = {
  fetchError: 'FETCH_ERROR',
};
/**
 * Name: REDUCER_PATHS
 * Desc: The reducer paths.
 */
export const API_RESPONSE_STATUS = {
  SUCCESS: '200',
  DATA_NOT_FOUND: 'data_not_found',
};
/**
 * Name: FILE_PATH
 * Desc: downloading file path.
 */
export const FILE_PATH = {
  FILE: '/File_',
  FILE_DESCRIPTION: 'Download',
};