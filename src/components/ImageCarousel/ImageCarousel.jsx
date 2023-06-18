import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './ImageCarousel.module.scss';

import { ReactComponent as LeftArrowIcon } from './assets/LeftArrowIcon.svg';
import { ReactComponent as RightArrowIcon } from './assets/RightArrowIcon.svg';

const cx = classNames.bind(style);

function ImageCarousel(props) {
  const { children, autoSlideInterval, slideDelay } = props;
  const childrenArray = Array.isArray(children) ? children : [children];

  const [currentIndex, setCurrentIndex] = useState({
    index: 0,
    forceSignal: false
  });

  const intervalId = useRef();
  const timeoutId = useRef();

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (timeoutId.current) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (autoSlideInterval) {
      intervalId.current = setInterval(() => {
        setCurrentIndex((cI) => ({
          ...cI,
          index: cI.index === childrenArray.length - 1 ? 0 : cI.index + 1
        }));
      }, autoSlideInterval);
    }

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [currentIndex.forceSignal, childrenArray.length, autoSlideInterval]);

  const isForceSLideDisable = useRef(false);
  const handleForceSLide = useCallback(
    (callback) => {
      if (isForceSLideDisable.current) return;

      if (callback instanceof Function) callback();

      isForceSLideDisable.current = true;
      setTimeout(() => {
        isForceSLideDisable.current = false;
      }, slideDelay);
    },
    [slideDelay]
  );

  return (
    <div className={cx('image-carousel__wrapper')}>
      <div className={cx('image-carousel__items-wrapper')}>
        {/* { items.map((item, index) => (
          <div
            className={cx('image-carousel__item')}
            style={
              index === 0
                ? {
                    backgroundImage: `url(${item})`,
                    marginLeft: `-${currentIndex.index * 100}%`
                  }
                : {
                    backgroundImage: `url(${item})`
                  }
            }
          />
        ))} */}
        {childrenArray.map((child, index) =>
          React.cloneElement(child, {
            className: `${
              child?.props.className ? child.props.className : ''
            } ${cx('image-carousel__item')}`,
            style:
              index === 0
                ? {
                    marginLeft: `-${currentIndex.index * 100}%`
                  }
                : {},
            key: child.key
          })
        )}
      </div>
      <div className={cx('image-carousel__dots')}>
        {childrenArray.map((child, index) => (
          <div
            key={child.key}
            className={cx(
              'image-carousel__dot',
              index === currentIndex.index && 'active'
            )}
            onClick={() =>
              handleForceSLide(() => {
                setCurrentIndex({
                  index,
                  forceSignal: !currentIndex.forceSignal
                });
              })
            }
          />
        ))}
      </div>
      <div
        className={cx('image-carousel__prev-arrow')}
        onClick={() =>
          handleForceSLide(() => {
            setCurrentIndex({
              index:
                currentIndex.index === 0
                  ? childrenArray.length - 1
                  : currentIndex.index - 1,
              forceSignal: !currentIndex.forceSignal
            });
          })
        }
      >
        <LeftArrowIcon />
      </div>
      <div
        className={cx('image-carousel__next-arrow')}
        onClick={() =>
          handleForceSLide(() => {
            setCurrentIndex({
              index:
                currentIndex.index === childrenArray.length - 1
                  ? 0
                  : currentIndex.index + 1,
              forceSignal: !currentIndex.forceSignal
            });
          })
        }
      >
        <RightArrowIcon />
      </div>
    </div>
  );
}

ImageCarousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  autoSlideInterval: PropTypes.number,
  slideDelay: PropTypes.number
};

ImageCarousel.defaultProps = {
  autoSlideInterval: null,
  slideDelay: 0
};

export default ImageCarousel;
