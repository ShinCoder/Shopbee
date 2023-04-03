import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from '../Authentication.module.scss';

import { ReactComponent as TickIcon } from '../../assets/TickIcon.svg';

const cx = classNames.bind(style);

function SignupStep(props) {
  const { step } = props;

  return (
    <div className='d-flex align-items-center'>
      <div className={cx('signup-step--item', step == 1 ? 'active' : '')}>
        <div className={cx('signup-step--number')}>1</div>
        <p className={cx('signup-step--label')}>Verify phone no.</p>
      </div>
      <div className={cx('signup-step--arrow')} />
      <div className={cx('signup-step--item', step == 2 ? 'active' : '')}>
        <div className={cx('signup-step--number')}>2</div>
        <p className={cx('signup-step--label')}>Create password</p>
      </div>
      <div className={cx('signup-step--arrow')} />
      <div className={cx('signup-step--item', step == 3 ? 'active' : '')}>
        <div className={cx('signup-step--number')}>
          <TickIcon className={cx('signup-step--icon')} />
        </div>
        <p className={cx('signup-step--label')}>Done</p>
      </div>
    </div>
  );
}

SignupStep.propTypes = {
  step: PropTypes.oneOf([1, 2, 3]).isRequired
};

export default SignupStep;
