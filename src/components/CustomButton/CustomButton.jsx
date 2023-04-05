import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CustomButton.module.scss';

const cx = classNames.bind(styles);

function CustomeButton(props) {
  const { children, type, href, variant, additionClass } = props;

  const Component = type == 'anchor' ? 'a' : Link;

  return (
    <Component
      to={type == 'link' ? href : null}
      href={type == 'anchor' ? href : null}
      className={cx('custom-btn', variant, additionClass)}
    >
      {children}
    </Component>
  );
}

CustomeButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['anchor', 'link']).isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'blank']),
  additionClass: PropTypes.string
};

CustomeButton.defaultProps = {
  variant: 'primary',
  additionClass: ''
};

export default CustomeButton;
