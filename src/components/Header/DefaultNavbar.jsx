import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import * as userActions from '../../redux/actions/User';
import { auth } from '../../services/firebase';
import style from './Header.module.scss';
import userService from '../../services/api/userService';
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
import notificationPlaceholder2 from '../../assets/images/placeholder2.png';
import downloadQR from './assets/download_qr.png';
import downloadAppStore from './assets/download_appstore.png';
import downloadGooglePlay from './assets/download_googleplay.png';
import downloadAppGallery from './assets/download_appgallery.png';

const cx = classNames.bind(style);

function Navbar() {
  const userState = useSelector((state) => state.user);
  const { user } = userState;
  const dispatch = useDispatch();
  const [notification, setNotification] = useState([]);
  const [notificationLoading, setNotificationLoading] = useState(false);

  const language = { current: 'English', available: ['Tiếng Việt', 'English'] };

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        setNotificationLoading(true);
        const data = await userService.getNotification(user.id);
        setNotification(data);
      } catch (error) {
        dispatch(setError(error.message ? error.message : error));
      }

      setNotificationLoading(false);
    };

    if (user) fetchNotification();
  }, [dispatch, user]);

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
                notificationLoading ? (
                  <div className={cx('notification-placeholder-wrapper')}>
                    <div
                      className={cx('notification-placeholder-image-wrapper')}
                    >
                      <img
                        className={cx('notification-placeholder-image')}
                        src={notificationPlaceholder2}
                        alt='Placeholder'
                      />
                      <p className={cx('notification-placeholder-text')}>
                        Loading...
                      </p>
                    </div>
                  </div>
                ) : (
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
                )
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
                    <Link
                      to={config.routes.signup}
                      className={cx('notification-placeholder-btn')}
                    >
                      <div className={cx('notification-placeholder-btn-text')}>
                        Sign Up
                      </div>
                    </Link>
                    <Link
                      to='/'
                      className={cx('notification-placeholder-btn')}
                    >
                      <div className={cx('notification-placeholder-btn-text')}>
                        Login
                      </div>
                    </Link>
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
