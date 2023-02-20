import PropTypes from 'prop-types';

import Header from '../../components/Header';

function DefaultLayout({ children }) {
  return (
    <>
      <Header fixed />
      <div style={{ marginTop: '100px' }}>{children}</div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
