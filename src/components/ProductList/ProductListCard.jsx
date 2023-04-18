import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import { toVietnamDongFormat } from '../../utils/format';
import config from '../../config';

const cx = classNames.bind(styles);

const specialType = {
  preferred: 'PREFERRED'
};

function ProductListCard(props) {
  const { data } = props;

  return (
    <Link to={`${config.routes.product}/${data.id}`}>
      <div className={cx('card-wrapper', 'hover-primary')}>
        <div className={cx('card-banner-wrapper')}>
          <img
            src={data.banner}
            alt={data.title}
            className={cx('card-banner')}
          />
          {/* <div
            className={cx('card-banner')}
            style={{ backgroundImage: `url(${data.banner})` }}
          /> */}
          {data.special && data.special.type === specialType.preferred && (
            <div className={cx('card-special-mark-wrapper')}>
              <div className={cx('card-special-mark')}>
                <span>Preferred</span>
              </div>
            </div>
          )}
          {data.sale && (
            <div className={cx('card-sale-mark-wrapper')}>
              <div className={cx('card-sale-mark')}>
                <span>{`${data.sale}%`}</span>
                <span>off</span>
              </div>
            </div>
          )}
        </div>
        <div className={cx('card-content-wrapper')}>
          <div className={cx('card-content-title-wrapper')}>
            <div className={cx('card-content-title')}>{data.title}</div>
          </div>
          {/* <div className={cx('card-content-sale-banner')} /> */}
          <div className={cx('card-content-footer')}>
            <div className={cx('card-content-price')}>
              <span>₫</span>
              <span>{toVietnamDongFormat(data.price)}</span>
            </div>
            <div className={cx('card-content-sold')}>{data.soldCount} sold</div>
          </div>
        </div>
        <div className={cx('card-hover-footer')}>Find Similar</div>
      </div>
    </Link>
  );
}

ProductListCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProductListCard;
