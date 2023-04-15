import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import style from '../Header.module.scss';

import Popper from '../../Popper';
import CustomeButton from '../../CustomButton/CustomButton';
import { toVietnamDongFormat } from '../../../utils/format';

import { ReactComponent as CartIcon } from '../../../assets/icons/CartIcon.svg';

const cx = classNames.bind(style);

function HeaderCart() {
  const cartState = useSelector((state) => state.cart);
  const cartItem = cartState?.items;

  return (
    <Popper
      render={
        <div className={cx('header-cart-content-wrapper')}>
          <div className={cx('header-cart-content-title')}>
            Recently Added Products
          </div>
          {cartItem.map((item) => (
            <Link
              className={cx('header-cart-item-wrapper')}
              key={item.product.id}
              to='/'
            >
              <div
                className={cx('header-cart-item-banner')}
                style={{
                  backgroundImage: `url(${item.product.banner})`
                }}
              />
              <div className={cx('header-cart-item-content')}>
                <div className='d-flex align-items-center'>
                  <div className={cx('header-cart-item-name')}>
                    {item.quantity > 1 && <span>Bundle</span>}
                    {item.product.name}
                  </div>
                  <div className={cx('flex-spacer')} />
                  <div className={cx('header-cart-item-price')}>
                    ₫{toVietnamDongFormat(item.product.unitPrice)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className={cx('header-cart-footer')}>
            <div className='flex-spacer' />
            <CustomeButton
              type='link'
              href='/'
              additionClass={cx('header-cart-footer-btn')}
            >
              view my shopping cart
            </CustomeButton>
          </div>
        </div>
      }
    >
      <Link
        to='/'
        className={cx('header-cart-wrapper')}
      >
        <CartIcon className={cx('header-cart-icon')} />
        <div className={cx('header-cart-number-badge')}>{cartItem.length}</div>
      </Link>
    </Popper>
  );
}

export default HeaderCart;
