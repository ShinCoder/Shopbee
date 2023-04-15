import PropTypes from 'prop-types';

import { DefaultHeader } from '../../components/Header';

function DefaultLayout({ children }) {
  return (
    <>
      <DefaultHeader fixed />
      <div style={{ marginTop: 'var(--header-height)' }}>{children}</div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
