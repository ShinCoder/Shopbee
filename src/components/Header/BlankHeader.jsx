import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Header.module.scss';
import config from '../../config';

import { ReactComponent as ShopeeLogo } from '../../assets/images/shopee_logo.svg';

const cx = classNames.bind(style);

function BlankHeader(props) {
  const { title } = props;
  return (
    <div className={cx('blank-header-wrapper')}>
      <div className='container w-100 d-flex justify-content-between'>
        <div className='d-flex'>
          <Link
            to={config.routes.home}
            className={cx('blank-header-logo-wrapper')}
          >
            <ShopeeLogo className={cx('blank-header-logo')} />
          </Link>
          <div className={cx('blank-header-title')}>{title}</div>
        </div>
        <a
          href='/'
          className={cx('blank-header-help-link')}
        >
          Need help?
        </a>
      </div>
    </div>
  );
}

BlankHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default BlankHeader;
