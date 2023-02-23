import classNames from 'classnames/bind';
import style from './Header.module.scss';

import NavbarItem from './NavbarItem';
import { ReactComponent as FacebookIcon } from '../../assets/FacebookIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/InstagramIcon.svg';
import { ReactComponent as BellIcon } from '../../assets/BellIcon.svg';
import { ReactComponent as CircledQuestionIcon } from '../../assets/CircledQuestionIcon.svg';
import { ReactComponent as GlobeIcon } from '../../assets/GlobeIcon.svg';
import { ReactComponent as AngleDownIcon } from '../../assets/AngleDownIcon.svg';

const cx = classNames.bind(style);

function Navbar() {
  const language = 'English';
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
        <NavbarItem
          variant='link'
          href='/'
          seperator='left'
        >
          Download
        </NavbarItem>
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
          {language}
        </NavbarItem>
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
