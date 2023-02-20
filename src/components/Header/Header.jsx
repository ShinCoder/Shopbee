import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Header.module.scss';

import Navbar from './Navbar';

const cx = classNames.bind(style);

function Header({ fixed }) {
  return (
    <div className={cx('header-wrapper', fixed ? 'fixed' : '')}>
      <Navbar />
    </div>
  );
}

Header.propTypes = {
  fixed: PropTypes.bool
};

Header.defaultProps = {
  fixed: false
};

export default Header;
