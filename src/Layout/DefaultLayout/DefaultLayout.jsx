import PropTypes from 'prop-types';

import { DefaultHeader } from '../../components/Header';

function DefaultLayout({ children }) {
  return (
    <>
      <DefaultHeader fixed />
      <div style={{ marginTop: '200px' }}>{children}</div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
