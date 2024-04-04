export const API_END_POINTS = {
  userLogin: 'api/v1/auth/login',
};

export const REQUEST_METHODS = Object.freeze({
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
});

export const FETCH_PREFIXES = Object.freeze({
  NONE_PREFIXES: 'NONE_',
  PENDING_PREFIXES: 'PENDING_',
  SUCCESS_PREFIXES: 'SUCCESS_',
  FAILURE_PREFIXES: 'FAILURE_',
});

export const CRUD_ACTION_TYPES = Object.freeze({
  GET: 'GET',
  ADD: 'ADD',
  EDIT: 'EDIT',
  REMOVE: 'REMOVE',
  RESET: 'RESET',
  POST: 'POST',
});
