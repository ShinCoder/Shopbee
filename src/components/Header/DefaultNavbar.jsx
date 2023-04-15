import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import * as userActions from '../../redux/actions/User';
import { auth } from '../../services/firebase';
import style from './Header.module.scss';
import config from '../../config';

import NavbarItem from './components/NavbarItem';
import Popper from '../Popper';
import NotificationItem from './components/NotificationItem';
import { setError } from '../../redux/actions/System';

import { ReactComponent as FacebookIcon } from '../../assets/icons/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/InstagramIcon.svg';
import { ReactComponent as BellIcon } from '../../assets/icons/BellIcon.svg';
import { ReactComponent as CircledQuestionIcon } from '../../assets/icons/CircledQuestionIcon.svg';
import { ReactComponent as GlobeIcon } from '../../assets/icons/GlobeIcon.svg';
import { ReactComponent as AngleDownIcon } from '../../assets/icons/AngleDownIcon.svg';

import avatarPlaceholder from '../../assets/images/avatar_placeholder.png';

import notificationPlaceholder from '../../assets/images/placeholder1.png';
import downloadQR from './assets/download_qr.png';
import downloadAppStore from './assets/download_appstore.png';
import downloadGooglePlay from './assets/download_googleplay.png';
import downloadAppGallery from './assets/download_appgallery.png';

const cx = classNames.bind(style);

function Navbar() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const dispatch = useDispatch();

  const language = { current: 'English', available: ['Tiếng Việt', 'English'] };
  // const user = null;
  // const user = {
  //   username: 'kiettran818',
  //   avatar: 'https://cf.shopee.vn/file/c11d60fd27cd0ffde33d00675489cfe7_tn'
  // };

  const notification = [
    {
      href: '/test',
      data: {
        image:
          'https://down-vn.img.susercontent.com/file/07b48cd255a12f6d06e80bf0fefba28c_tn',
        title: 'Cho Shopee biết thêm nhé!',
        description:
          '📝 Cập nhật đầy đủ thông tin để luôn nhận được các ưu đãi Shopee dành riêng cho bạn! Cập nhật ngay!'
      }
    },
    {
      href: '/',
      data: {
        image:
          'https://down-vn.img.susercontent.com/file/sg-11134004-23030-ilamgz23spov82_tn',
        title: 'FREESHIP ĐƠN 0Đ LẤY NGAY TẠI LIVE',
        description:
          '💕 Thứ 6 mặc đẹp cùng Live ✨ Freeship 0Đ cho mọi đơn thời trang 🔥 Thời trang giảm đến 50% độc quyền 👉 Deal đang chiếm sóng - Vào Live săn ngay!'
      }
    },
    {
      href: '/',
      data: {
        image:
          'https://down-vn.img.susercontent.com/file/sg-11134004-23030-jwm5x45orpovb6_tn',
        title: 'FREESHIP 55.000Đ + DEAL GIẢM 50%',
        description:
          '💕 Thời trang, mỹ phẩm, điện tử sale sốc ✨ Top deal bán chạy chỉ dưới 100.000Đ 👉 Rẻ chất ngất - "Gom" đã tay!'
      }
    },
    {
      href: '/',
      data: {
        image:
          'https://down-vn.img.susercontent.com/file/sg-11134004-23030-tppp27vzrpov13_tn',
        title: 'Kiet LẤY MÃ 30.000Đ Ở ĐÂY NÈ!',
        description:
          '💕 Áp dụng cho đơn bất kì ✨ Bạt ngàn deal sốc giảm 50% 👉 Bạn cần sắm gì? - Click vào mua ngay!'
      }
    },
    {
      href: '/',
      data: {
        image:
          'https://down-vn.img.susercontent.com/file/sg-11134004-23030-d7hdynncqpov0a_tn',
        title: 'VOUCHER XỊN HOÀN ĐẾN 200.000 XU',
        description:
          '🔥 Voucher Hoàn Xu Xtra 🌈 Có sẵn trong Kho Voucher 💥 Hiệu lực 0:00 17/3/2023 - 23:59 23/3/2023  👉 Số lượng có hạn, dùng ngay bạn nhé!'
      }
    }
  ];

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(userActions.removeUser());
      })
      .catch((error) =>
        dispatch(setError(error.message ? error.message : error))
      );
  };

  return (
    <div className='d-flex'>
      <div className={cx('navbar-item-group')}>
        <NavbarItem
          variant='anchor'
          href='/'
        >
          <span>Seller Center</span>
        </NavbarItem>
        {user ? null : (
          <NavbarItem
            variant='link'
            href='/'
            seperator='left'
          >
            <span>Join as Seller</span>
          </NavbarItem>
        )}
        <Popper
          placement='bottom-start'
          arrow={false}
          render={
            <div className={cx('download-box-wrapper')}>
              <img
                src={downloadQR}
                alt='download QR'
                className={cx('download-box-qr')}
              />
              <div className={cx('download-box-apps-wrapper')}>
                <img
                  src={downloadAppStore}
                  alt='download app store'
                  className={cx('download-box-apps')}
                />
                <img
                  src={downloadGooglePlay}
                  alt='download google play'
                  className={cx('download-box-apps')}
                />
                <img
                  src={downloadAppGallery}
                  alt='download app gallery'
                  className={cx('download-box-apps')}
                />
              </div>
            </div>
          }
        >
          <NavbarItem
            variant='link'
            href='/'
            seperator='left'
          >
            <span>Download</span>
          </NavbarItem>
        </Popper>
        <NavbarItem seperator='left'>Follow us on</NavbarItem>
        <NavbarItem>
          <a
            href='/'
            className='d-flex'
          >
            <FacebookIcon className={cx('navbar-icon')} />
          </a>
          <a
            href='/'
            className='d-flex'
          >
            <InstagramIcon className={cx('navbar-icon')} />
          </a>
        </NavbarItem>
      </div>
      <div className='flex-spacer' />
      <div className={cx('navbar-item-group')}>
        <Popper
          render={
            <div className={cx('notification-wrapper')}>
              {user ? (
                <>
                  <div className={cx('notification-box-header')}>
                    Recently Received Notifications
                  </div>
                  {notification.map((item) => (
                    <NotificationItem
                      key={item.data.title}
                      href={item.href}
                      data={item.data}
                    />
                  ))}
                  <Link
                    to='/'
                    className={cx('notification-box-btn')}
                  >
                    View All
                  </Link>
                </>
              ) : (
                <div className={cx('notification-placeholder-wrapper')}>
                  <div className={cx('notification-placeholder-image-wrapper')}>
                    <img
                      className={cx('notification-placeholder-image')}
                      src={notificationPlaceholder}
                      alt='Placeholder'
                    />
                    <p className={cx('notification-placeholder-text')}>
                      Log in to view notifications
                    </p>
                  </div>
                  <div>
                    <button
                      type='button'
                      className={cx('notification-placeholder-btn')}
                    >
                      <div className={cx('notification-placeholder-btn-text')}>
                        Sign Up
                      </div>
                    </button>
                    <button
                      type='button'
                      className={cx('notification-placeholder-btn')}
                    >
                      <div className={cx('notification-placeholder-btn-text')}>
                        Login
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          }
        >
          <NavbarItem
            variant='link'
            href='/'
            startIcon={
              <BellIcon
                width='1.4rem'
                height='1.8rem'
              />
            }
          >
            <span>Notifications</span>
          </NavbarItem>
        </Popper>
        <NavbarItem
          variant='link'
          href='/'
          startIcon={
            <CircledQuestionIcon
              width='1.8rem'
              height='1.8rem'
            />
          }
        >
          <span>Help</span>
        </NavbarItem>
        <Popper
          render={
            <div className={cx('language-box-wrapper')}>
              {language.available.map((lang) => (
                <button
                  key={lang}
                  type='button'
                  className={cx('language-box-button')}
                >
                  {lang}
                </button>
              ))}
            </div>
          }
        >
          <NavbarItem
            hoverable
            startIcon={
              <GlobeIcon
                width='1.6rem'
                height='1.6rem'
              />
            }
            endIcon={
              <AngleDownIcon
                width='1.2rem'
                height='1.2rem'
              />
            }
          >
            {language.current}
          </NavbarItem>
        </Popper>
        {user ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <div style={{ marginLeft: '1rem' }}>
            <Popper
              render={
                <div className={cx('account-option-wrapper')}>
                  <Link
                    to='/'
                    className={cx('account-option-item')}
                  >
                    My Account
                  </Link>
                  <Link
                    to='/'
                    className={cx('account-option-item')}
                  >
                    My Purchase
                  </Link>
                  <button
                    type='button'
                    className={cx('account-option-item')}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              }
            >
              <NavbarItem hoverable>
                <img
                  src={user.avatar || avatarPlaceholder}
                  alt={user.username}
                  className={cx('navbar-avatar')}
                />
                <span className={cx('navbar-username')}>{user.username}</span>
              </NavbarItem>
            </Popper>
          </div>
        ) : (
          <div style={{ display: 'flex', marginLeft: '1rem' }}>
            <NavbarItem
              variant='link'
              href={config.routes.signup}
            >
              <span>Sign Up</span>
            </NavbarItem>
            <NavbarItem
              variant='link'
              href='/'
              seperator='left'
            >
              <span>Login</span>
            </NavbarItem>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
