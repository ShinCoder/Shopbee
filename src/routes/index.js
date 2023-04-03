import config from '../config';

import Home from '../pages/Home';
import { Signup } from '../pages/Authentication';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.signup, component: Signup, layout: null }
];

export { publicRoutes };
