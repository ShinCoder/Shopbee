const routes = {
  home: '/',
  signup: '/buyer/signup',
  login: '/buyer/login',
  product: '/product',
  similarProduct: '/find_similar_product',
  test: '/test'
};

routes.productDetail = `${routes.product}/:id`;

export default routes;
