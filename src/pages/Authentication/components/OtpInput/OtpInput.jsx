import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from '../Authentication.module.scss';

const cx = classNames.bind(style);

function OtpInput(props) {
  const { setValue } = props;
  const handleOtpInput = (e) => {
    if (e.target.value.length > 6) e.target.value = e.target.value.slice(0, 6);
    setValue(e.target.value);
  };

  return (
    <div className={cx('otp-input--wrapper')}>
      <input
        type='number'
        autoComplete='one-time-code'
        maxLength={6}
        className={cx('otp-input')}
        onInput={handleOtpInput}
      />
      <div className={cx('otp-input--underline-wrapper')}>
        <div className={cx('otp-input--underline')} />
        <div className={cx('otp-input--underline')} />
        <div className={cx('otp-input--underline')} />
        <div className={cx('otp-input--underline')} />
        <div className={cx('otp-input--underline')} />
        <div className={cx('otp-input--underline')} />
      </div>
    </div>
  );
}

OtpInput.propTypes = {
  setValue: PropTypes.func.isRequired
};

export default OtpInput;
