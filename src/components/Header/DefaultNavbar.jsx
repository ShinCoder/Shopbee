import classNames from 'classnames/bind';
import style from './Header.module.scss';

import NavbarItem from './NavbarItem';
import Popper from '../Popper';
import { ReactComponent as FacebookIcon } from '../../assets/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/InstagramIcon.svg';
import { ReactComponent as BellIcon } from '../../assets/BellIcon.svg';
import { ReactComponent as CircledQuestionIcon } from '../../assets/CircledQuestionIcon.svg';
import { ReactComponent as GlobeIcon } from '../../assets/GlobeIcon.svg';
import { ReactComponent as AngleDownIcon } from '../../assets/AngleDownIcon.svg';
import notificationPlaceholder from './assets/notification_placeholder.png';
import downloadQR from './assets/download_qr.png';
import downloadAppStore from './assets/download_appstore.png';
import downloadGooglePlay from './assets/download_googleplay.png';
import downloadAppGallery from './assets/download_appgallery.png';

const cx = classNames.bind(style);

function Navbar() {
  const language = { current: 'English', available: ['Tiếng Việt', 'English'] };
  const user = null;

  return (
    <div className='d-flex'>
      <div className={cx('navbar-item-group')}>
        <NavbarItem
          variant='anchor'
          href='/'
        >
          Seller Center
        </NavbarItem>
        <NavbarItem
          variant='link'
          href='/'
          seperator='left'
        >
          Join as Seller
        </NavbarItem>
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
            Download
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
              {user ? null : (
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
            Notifications
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
          Help
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
          <>
            <NavbarItem>{user.username}</NavbarItem>
          </>
        ) : (
          <div style={{ display: 'flex', marginLeft: '1rem' }}>
            <NavbarItem
              variant='link'
              href='/'
            >
              Sign Up
            </NavbarItem>
            <NavbarItem
              variant='link'
              href='/'
              seperator='left'
            >
              Login
            </NavbarItem>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
