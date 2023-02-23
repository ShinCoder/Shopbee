import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Header.module.scss';

import Navbar from './DefaultNavbar';

const cx = classNames.bind(style);

function Header({ fixed }) {
  return (
    <div className={cx('header-wrapper', fixed ? 'fixed' : '')}>
      <div className='container'>
        <Navbar />
      </div>
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
