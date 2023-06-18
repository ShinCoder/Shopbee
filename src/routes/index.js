import config from '../config';

import Home from '../pages/Home';
import { Signup } from '../pages/Authentication';
import Test from '../pages/Test';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.signup, component: Signup, layout: null },
  { path: config.routes.test, component: Test, layout: null }
];

export { publicRoutes };
