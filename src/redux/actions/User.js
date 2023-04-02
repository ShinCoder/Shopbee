export const TYPE_SET_USER = 'SET_USER';
export const TYPE_REMOVE_USER = 'REMOVE_USER';

export const setUser = (user) => ({
  type: TYPE_SET_USER,
  payload: user
});

export const removeUser = () => ({ type: TYPE_REMOVE_USER });
