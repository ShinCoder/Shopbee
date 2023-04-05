import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from '../Header.module.scss';

import Popper from '../../Popper';
import CustomeButton from '../../CustomButton/CustomButton';
import { toVietnamDongFormat } from '../../../utils/format';

import { ReactComponent as CartIcon } from '../../../assets/icons/CartIcon.svg';

const cx = classNames.bind(style);

function HeaderCart() {
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
    <Popper
      render={
        <div className={cx('header-cart-content-wrapper')}>
          <div className={cx('header-cart-content-title')}>
            Recently Added Products
          </div>
          {cartItem.map((item) => (
            <div
              className={cx('header-cart-item-wrapper')}
              key={item.product.id}
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
                    {toVietnamDongFormat(item.product.unitPrice)}
                  </div>
                </div>
              </div>
            </div>
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
