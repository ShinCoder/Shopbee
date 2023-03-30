import classNames from 'classnames/bind';
import { useState, memo } from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import style from './CustomInput.module.scss';

import { ReactComponent as GreenTickIcon } from '../../assets/icons/GreenTickIcon.svg';

const cx = classNames.bind(style);

function CustomInput(props) {
  const { refName, control, placeholder, showTick } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      name={refName}
      control={control}
      defaultValue=''
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { isDirty, error }
      }) => (
        <div className={cx('input-wrapper')}>
          <div
            className={cx(
              'input-field-wrapper',
              isFocused && 'focused',
              isDirty && error && 'error'
            )}
          >
            <input
              type='text'
              className={cx('input-field')}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                onBlur();
                setIsFocused(false);
              }}
              ref={ref}
            />
            {showTick && isDirty && !error && (
              <GreenTickIcon className={cx('input-tick')} />
            )}
          </div>
          <div className={cx('input-error', isDirty && error && 'show')}>
            {error?.message}
          </div>
        </div>
      )}
    />
  );
}

CustomInput.propTypes = {
  refName: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  showTick: PropTypes.bool
};

CustomInput.defaultProps = {
  placeholder: '',
  showTick: false
};

export default memo(CustomInput);
