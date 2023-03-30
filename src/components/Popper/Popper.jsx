import React, { useState, useEffect } from 'react';
import { usePopper } from 'react-popper';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './Popper.module.scss';

const cx = classNames.bind(style);

function Popper(props) {
  const { placement, offset, children, render, arrow, useOwnState, isVisible } =
    props;

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes, forceUpdate } = usePopper(
    referenceElement,
    popperElement,
    {
      placement,
      modifiers: [{ name: 'arrow', options: { element: arrowElement } }]
    }
  );

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (useOwnState) setVisible(isVisible);
  }, [useOwnState, isVisible]);

  // useEffect(() => {
  //   console.log('render');
  // }, []);

  useEffect(() => {
    const updatePopper = () => {
      if (visible) {
        forceUpdate();
      }
    };

    const scheduleUpdatePopper = () => {
      setTimeout(updatePopper, 0);
    };

    scheduleUpdatePopper();
  }, [forceUpdate, visible]);

  return (
    <>
      <div
        className='d-inline-block'
        ref={setReferenceElement}
        onMouseEnter={useOwnState ? null : () => setVisible(true)}
        onMouseLeave={useOwnState ? null : () => setVisible(false)}
      >
        {children}
      </div>
      <div
        className={cx('popper-content-wrapper')}
        ref={setPopperElement}
        style={{ ...styles.popper, '--popper-offset': `${offset}px` }}
        data-show={visible || null}
        onMouseEnter={useOwnState ? null : () => setVisible(true)}
        onMouseLeave={useOwnState ? null : () => setVisible(false)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes.popper}
      >
        {React.cloneElement(render, {
          className: `${
            render?.props.className ? render.props.className : ''
          } ${cx('popper-content')}`
        })}
        {arrow && (
          <div
            className={cx('popper-arrow')}
            ref={setArrowElement}
            style={styles.arrow}
          />
        )}
      </div>
    </>
  );
}

Popper.propTypes = {
  placement: PropTypes.oneOf(['bottom-end', 'bottom-start']),
  offset: PropTypes.number,
  children: PropTypes.node.isRequired,
  render: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
  useOwnState: PropTypes.bool,
  isVisible: PropTypes.bool
};

Popper.defaultProps = {
  placement: 'bottom-end',
  offset: 0,
  arrow: true,
  useOwnState: false,
  isVisible: false
};

export default Popper;
