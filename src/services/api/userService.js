import axiosClient from './axiosClient';

const userService = {
  getNotification: (id) => {
    const url = `/users/${id}/notification`;
    return axiosClient.get(url);
  }
};

export default userService;
