import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

import Navbar from './DefaultNavbar';
import Searchbar from './components/Searchbar';

import { ReactComponent as ShopeeLogo } from '../../assets/images/shopee_logo.svg';

const cx = classNames.bind(style);

function DefaultHeader({ fixed }) {
  return (
    <div className={cx('default-header-wrapper', fixed ? 'fixed' : '')}>
      <div className='container'>
        <Navbar />
        <div className={cx('header-with-search')}>
          <Link
            to='/'
            className={cx('header-logo-wrapper')}
          >
            <ShopeeLogo className={cx('header-logo')} />
          </Link>
          <div className={cx('header-search-section')}>
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
}

DefaultHeader.propTypes = {
  fixed: PropTypes.bool
};

DefaultHeader.defaultProps = {
  fixed: false
};

export default DefaultHeader;
