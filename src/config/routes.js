const routes = {
  home: '/',
  signup: '/buyer/signup',
  product: '/product'
};

routes.productDetail = `${routes.product}/:id`;

export default routes;
