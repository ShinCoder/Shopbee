import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import config from '../../config';

import Navbar from './DefaultNavbar';
import Searchbar from './components/Searchbar';
import HeaderCart from './components/HeaderCart';

import { ReactComponent as ShopeeLogo } from '../../assets/images/shopee_logo.svg';

const cx = classNames.bind(style);

function DefaultHeader({ fixed }) {
  const suggestion = [
    { name: 'Ốp Lưng iPhone 7 Plus', href: '/' },
    { name: 'Ốp Lưng iPhone 8 Plus', href: '/' },
    { name: 'Ốp Lưng iPhone 9 Plus', href: '/' },
    { name: 'Ốp Lưng iPhone 10 Plus', href: '/' },
    { name: 'Ốp Lưng iPhone 11 Plus', href: '/' }
  ];

  const cartItem = [
    {
      product: {
        id: 1,
        banner:
          'https://down-vn.img.susercontent.com/file/e1f00c1b371328527b522a741ae6c87e_tn',
        unitPrice: 60000,
        name: 'Loa bluetooth mini không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH'
      },
      quantity: 2
    },
    {
      product: {
        id: 2,
        banner:
          'https://down-vn.img.susercontent.com/file/2e0c9d5eae545212ae2ecbf97ceaae64_tn',
        unitPrice: 43200,
        name: 'Ốp lưng iphone 6/ 6 PLUS/ 7/ 7 PLUS/ 8/ 8 PLUS HOA VĂN 2022'
      },
      quantity: 1
    }
  ];

  return (
    <div className={cx('default-header-wrapper', fixed ? 'fixed' : '')}>
      <div className='container'>
        <Navbar />
        <div className={cx('header-with-search')}>
          <Link
            to={config.routes.home}
            className={cx('header-logo-wrapper')}
          >
            <ShopeeLogo className={cx('header-logo')} />
          </Link>
          <div className={cx('header-search-section')}>
            <Searchbar />
            <div>
              <div className={cx('header-suggestion-box')}>
                {suggestion.map((sug) => (
                  <Link
                    key={sug.name}
                    to={sug.href}
                    className={cx('header-suggestion')}
                  >
                    {sug.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={cx('header-cart-section')}>
            <HeaderCart />
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
