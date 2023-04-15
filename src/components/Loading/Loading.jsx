import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import style from './Loading.module.scss';

const cx = classNames.bind(style);

function Loading() {
  const systemState = useSelector((state) => state.system);
  return (
    systemState?.loading && (
      <div className={cx('loading-wrapper')}>
        <div className={cx('loading-dot-wrapper')}>
          <div className={cx('loading-dot', 'first')} />
          <div className={cx('loading-dot', 'second')} />
          <div className={cx('loading-dot', 'third')} />
        </div>
      </div>
    )
  );
}

export default Loading;
