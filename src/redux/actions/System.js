export const TYPE_SET_ERROR = 'SET_ERROR';
export const TYPE_CLEAR_ERROR = 'CLEAR_ERROR';
export const TYPE_SET_LOADING = 'SET_LOADING';

export const setError = (message) => ({
  type: TYPE_SET_ERROR,
  payload: message
});

export const clearError = () => ({ type: TYPE_CLEAR_ERROR });

export const setLoading = (isLoading) => ({
  type: TYPE_SET_LOADING,
  payload: isLoading
});
