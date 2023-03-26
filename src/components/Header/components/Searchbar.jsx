import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../Header.module.scss';

import { ReactComponent as MagnifierIcon } from '../../../assets/icons/MagnifierIcon.svg';

import Popper from '../../Popper';

const cx = classNames.bind(style);

function Searchbar() {
  const [hintBoxState, setHintBoxState] = useState(false);

  const prefill = {
    text: 'Đăng ký và nhận voucher bạn mới đến 70k!',
    href: '/'
  };

  const hints = ['a', 'b', 'c', 'd'];

  return (
    <Popper
      placement='bottom-start'
      offset={8}
      arrow={false}
      useOwnState
      isVisible={hintBoxState}
      render={
        <div className={cx('hint-wrapper')}>
          {prefill && (
            <>
              <Link
                className={cx('hint', 'hint-prefill')}
                to={prefill?.href}
              >
                <span className={cx('hint-text')}>{prefill?.text}</span>
                <img
                  src='https://down-vn.img.susercontent.com/file/e92ab33ccea0695b22219c8a152d9f61'
                  alt='alt'
                  height='24'
                />
              </Link>
              {hints.map((hint) => (
                <Link
                  key={hint}
                  className={cx('hint')}
                  to={`/search?keyword=${hint}`}
                >
                  <span className={cx('hint-text')}>{hint}</span>
                </Link>
              ))}
            </>
          )}
        </div>
      }
    >
      <div className={cx('searchbar-wrapper')}>
        <form
          action='/'
          role='search'
          className={cx('searchbar-form')}
          autoComplete='off'
        >
          <input
            type='text'
            name='keyword'
            placeholder={prefill?.text}
            className={cx('searchbar-input')}
            onFocus={() => setHintBoxState(true)}
            onBlur={() => setHintBoxState(false)}
          />
          <button
            type='submit'
            className={cx('btn', 'searchbar-btn')}
          >
            <MagnifierIcon
              width='14px'
              height='14px'
              fill='currentColor'
            />
          </button>
        </form>
      </div>
    </Popper>
  );
}

export default Searchbar;
