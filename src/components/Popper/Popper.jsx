import { useState } from 'react';
import { usePopper } from 'react-popper';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './Popper.module.scss';

const cx = classNames.bind(style);

function Popper(props) {
  const { placement, children, render } = props;

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      }
    ]
  });

  return (
    <>
      <div
        className='d-inline-block'
        ref={setReferenceElement}
      >
        {children}
      </div>

      <div
        className={cx('popper-content')}
        ref={setPopperElement}
        style={styles.popper}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes.popper}
      >
        {render}
        <div
          className={cx('popper-arrow')}
          ref={setArrowElement}
          style={styles.arrow}
        />
      </div>
    </>
  );
}

Popper.propTypes = {
  placement: PropTypes.oneOf(['bottom-end', 'bottom-start']),
  children: PropTypes.node.isRequired,
  render: PropTypes.node.isRequired
};

Popper.defaultProps = {
  placement: 'bottom-end'
};

export default Popper;
