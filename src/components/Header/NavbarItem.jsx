import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function NavbarItem(props) {
  const { variant, children, href } = props;
  const Component = variant == 'text' ? 'div' : Link;

  return (
    <Component
      to={href}
      className={cx('navbar-item')}
    >
      {children}
    </Component>
  );
}

NavbarItem.propTypes = {
  variant: PropTypes.oneOf(['text', 'link']),
  children: PropTypes.node.isRequired,
  href: PropTypes.string
};

NavbarItem.defaultProps = {
  variant: 'text',
  href: null
};

export default NavbarItem;
