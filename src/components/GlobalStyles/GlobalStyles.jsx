import 'normalize.css/normalize.css';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './GlobalStyles.scss';

function GlobalStyles({ children }) {
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node
};

export default GlobalStyles;
