import axiosClient from './axiosClient';

const productService = {
  getDiscovery: () => {
    const url = '/products/discovery';
    return axiosClient.get(url);
  }
};

export default productService;
