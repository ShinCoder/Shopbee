import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

function NotificationItem(props) {
  const { data, href } = props;

  return (
    <Link
      to={href}
      className={cx('notification-item')}
    >
      <div className={cx('notification-item-img-wrapper')}>
        <div
          className={cx('notification-item-img')}
          style={{
            backgroundImage: `url(${data.image})`
          }}
        />
      </div>
      <div className={cx('notification-item-content')}>
        <div className={cx('notification-item-title')}>{data.title}</div>
        <div className={cx('notification-item-description')}>
          {data.description}
        </div>
      </div>
    </Link>
  );
}

NotificationItem.propTypes = {
  href: PropTypes.string.isRequired,
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

NotificationItem.defaultProps = {
  data: { image: 'https://via.placeholder.com/40x40' }
};

export default NotificationItem;
