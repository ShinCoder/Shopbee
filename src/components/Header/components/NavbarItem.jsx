import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from '../Header.module.scss';

const cx = classNames.bind(style);

function NavbarItem(props) {
  const { variant, children, href, hoverable, seperator, startIcon, endIcon } =
    props;
  const Component = variant == 'default' ? 'span' : Link;

  return (
    <Component
      to={href}
      className={cx(
        'navbar-item',
        variant,
        hoverable ? 'hoverable' : '',
        seperator ? `${seperator}-seperator` : ''
      )}
    >
      {startIcon
        ? React.cloneElement(startIcon, {
            className: cx('navbar-item-start-icon')
          })
        : startIcon}
      {children}
      {endIcon
        ? React.cloneElement(endIcon, {
            className: cx('navbar-item-end-icon')
          })
        : endIcon}
    </Component>
  );
}

NavbarItem.propTypes = {
  variant: PropTypes.oneOf(['default', 'link', 'anchor']),
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  hoverable: PropTypes.bool,
  seperator: PropTypes.oneOf(['left', 'right']),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node
};

NavbarItem.defaultProps = {
  variant: 'default',
  href: null,
  hoverable: null,
  seperator: null,
  startIcon: null,
  endIcon: null
};

export default NavbarItem;
