import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier
} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../../redux/actions/User';
import {
  auth,
  facebookAuthProvider,
  googleAuthProvider
} from '../../../services/firebase';
import style from './Signup.module.scss';
import config from '../../../config';
import { toVietnamPhoneNumberFormat } from '../../../utils/format';

import BlankHeader from '../../../components/Header/BlankHeader';
import CustomInput from '../../../components/CustomInput/CustomInput';
import SignupStep from '../components/SignupStep';
import OtpInput from '../components/OtpInput/OtpInput';

import { ReactComponent as ColoredFacebookIcon } from '../../../assets/icons/ColoredFacebookIcon.svg';
import { ReactComponent as ColoredGoogleIcon } from '../../../assets/icons/ColoredGoogleIcon.svg';
import { ReactComponent as BackArrowIcon } from '../assets/BackArrowIcon.svg';

const cx = classNames.bind(style);

function Signup() {
  const backgroundBanner =
    'https://down-vn.img.susercontent.com/file/sg-11134004-23030-vhzme1v5qvov4a';

  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [step, setStep] = useState(0);
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState();
  const [otpCode, setOtpCode] = useState();
  const [timer, setTimer] = useState(60);
  const timerId = useRef();
  const timerTextRef = useRef();
  const resendTriggerRef = useRef();

  const schema = useMemo(
    () =>
      Joi.object({
        phone_number: Joi.string()
          // .regex(/(^(\(?\+?84\)?|0)\s*[35789])\s*(([0-9]\s*){8})\b/)
          .messages({
            'string.empty': 'Invalid Phone',
            'string.pattern.base': 'Invalid Phone'
          })
      }),
    []
  );

  const { control, formState, handleSubmit, setValue, getValues } = useForm({
    mode: 'onChange',
    resolver: joiResolver(schema)
  });

  const generateRecaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          },
          'expired-callback': () => {}
        },
        auth
      );
    } catch (error) {
      console.log(error.code);
    }
  };

  const sendOtp = (phoneNumber) => {
    signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignupWithPhone = (values) => {
    setCurrentPhoneNumber(values.phone_number);
    setTimer(60);
    generateRecaptcha();
    sendOtp(toVietnamPhoneNumberFormat(values.phone_number));
    timerId.current = setInterval(() => {
      setTimer((preTimer) => preTimer - 1);
    }, 1000);
    setStep(1);
  };

  useEffect(() => {
    if (timerTextRef.current)
      timerTextRef.current.textContent = `Please wait ${timer} seconds to resend.`;
    if (timer == 0) {
      clearInterval(timerId.current);
      if (resendTriggerRef.current)
        resendTriggerRef.current.onclick = () => {
          window.recaptchaVerifier.clear();
          generateRecaptcha();
          sendOtp(currentPhoneNumber);
        };
    }
  }, [currentPhoneNumber, timer]);

  const handleOtpCodeSubmit = () => {
    if (otpCode.length === 6) {
      const { confirmationResult } = window;
      confirmationResult
        .confirm(otpCode)
        .then((result) => {
          const { user } = result;
          dispatch(
            userActions.setUser({
              uid: user?.uid,
              username: user?.phoneNumber,
              email: user?.email
            })
          );
          navigate(config.routes.home);
        })
        .catch((error) => {});
    }
  };

  const handleLoginWithFacebook = () => {
    signInWithPopup(auth, facebookAuthProvider)
      .then((result) => {
        const { user } = result;
        dispatch(
          userActions.setUser({
            uid: user?.uid,
            username: user?.displayName,
            email: user?.email
          })
        );
        navigate(config.routes.home);
      })
      .catch((error) => {});
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const { user } = result;
        dispatch(
          userActions.setUser({
            uid: user?.uid,
            username: user?.displayName,
            email: user?.email
          })
        );
        navigate(config.routes.home);
      })
      .catch((error) => {});
  };

  return (
    <>
      <BlankHeader title='sign up' />
      {step === 0 && (
        <div className={cx('signup-wrapper')}>
          <div
            className={cx('signup-inner-wrapper')}
            style={{ backgroundImage: `url(${backgroundBanner})` }}
          >
            <div className='d-flex justify-content-end'>
              <form
                className={cx('signup-form')}
                autoComplete='off'
                onSubmit={handleSubmit(handleSignupWithPhone)}
              >
                <div className={cx('form-title')}>Sign up</div>
                <div className={cx('form-content')}>
                  <CustomInput
                    refName='phone_number'
                    control={control}
                    placeholder='Phone Number'
                    showTick
                    customOnBlur={() => {
                      setValue(
                        'phone_number',
                        toVietnamPhoneNumberFormat(getValues('phone_number'))
                      );
                    }}
                  />
                  <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={!formState.isValid}
                  >
                    next
                  </button>
                  <div className={cx('seperator')}>
                    <div className={cx('line')} />
                    <span className={cx('label')}>or</span>
                    <div className={cx('line')} />
                  </div>
                  <div className={cx('alternative-signup')}>
                    <button
                      type='button'
                      className='btn btn-blank'
                      onClick={handleLoginWithFacebook}
                    >
                      <ColoredFacebookIcon />
                      <span>Facebook</span>
                    </button>
                    <button
                      type='button'
                      className='btn btn-blank'
                      onClick={handleLoginWithGoogle}
                    >
                      <ColoredGoogleIcon />
                      <span>Google</span>
                    </button>
                  </div>
                  <div className={cx('form-footer')}>
                    {"By signing up, you agree to Shopee's "}
                    <a
                      href='/'
                      target='_blank'
                    >
                      Term of Service
                    </a>
                    {' & '}
                    <a
                      href='/'
                      target='_blank'
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
                <div className={cx('signup-footer')}>
                  {'Have an account ? '}{' '}
                  <Link
                    to='login'
                    style={{ color: '#ee4d2d', fontWeight: '500' }}
                  >
                    Log In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className={cx('signup-wrapper-blank')}>
          <div className={cx('signup-inner-wrapper-blank')}>
            <SignupStep step={1} />
            <div className={cx('signup-otpform--wrapper')}>
              <div className={cx('signup-otpform--header')}>
                <div className={cx('signup-otpform--header-icon-wrapper')}>
                  <BackArrowIcon
                    className={cx('signup-otpform--header-icon')}
                    onClick={() => setStep(0)}
                  />
                </div>
                <div className={cx('signup-otpform--header-title')}>
                  Enter verification code
                </div>
              </div>
              <div className={cx('signup-otpform--content')}>
                <div>Your verification code is sent via SMS to</div>
                <div>{currentPhoneNumber}</div>
                <div className={cx('signup-otpform--content-input')}>
                  <OtpInput
                    value={otpCode}
                    setValue={setOtpCode}
                  />
                </div>
                <div className={cx('signup-otpform--resend')}>
                  {timer > 0 && (
                    <div
                      className={cx('signup-otpform--resend-secondary')}
                      ref={timerTextRef}
                    >
                      Please wait 40 seconds to resend.
                    </div>
                  )}
                  {timer <= 0 && (
                    <>
                      <div className={cx('signup-otpform--resend-primary')}>
                        Did not receive the code?
                      </div>
                      <div className={cx('signup-otpform--resend-primary')}>
                        <span ref={resendTriggerRef}>Resend</span>
                        {' or '}
                        <span>try a different verification method</span>
                      </div>
                    </>
                  )}
                </div>
                <button
                  type='button'
                  className='btn btn-primary'
                  disabled={
                    typeof otpCode === 'undefined' || otpCode.length != 6
                  }
                  onClick={handleOtpCodeSubmit}
                >
                  VERIFY
                </button>
              </div>
            </div>
            <button
              type='button'
              onClick={() => {
                console.log(otpCode);
              }}
            >
              submit
            </button>
          </div>
        </div>
      )}
      <div id='recaptcha-container' />
    </>
  );
}

export default Signup;
