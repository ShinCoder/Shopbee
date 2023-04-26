const routes = {
  home: '/',
  signup: '/buyer/signup',
  login: '/buyer/login',
  product: '/product',
  similarProduct: '/find_similar_product'
};

routes.productDetail = `${routes.product}/:id`;

export default routes;
