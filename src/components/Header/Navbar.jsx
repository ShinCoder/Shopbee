import classNames from 'classnames/bind';
import style from './Header.module.scss';

import NavbarItem from './NavbarItem';

const cx = classNames.bind(style);

function Navbar() {
  return (
    <div className='d-flex'>
      <div className={`${cx('navbar-item-group')} d-flex`}>
        <NavbarItem>s</NavbarItem>
        <NavbarItem>s</NavbarItem>
      </div>
      <div className='flex-spacer' />
      <div className={`${cx('navbar-item-group')} d-flex`}>
        <NavbarItem
          variant='link'
          href='/'
        >
          s
        </NavbarItem>
        <NavbarItem
          variant='link'
          href='/'
        >
          s
        </NavbarItem>
      </div>
    </div>
  );
}

export default Navbar;
