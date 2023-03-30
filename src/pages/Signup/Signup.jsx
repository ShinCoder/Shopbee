import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import style from './Signup.module.scss';

import BlankHeader from '../../components/Header/BlankHeader';
import CustomInput from '../../components/CustomInput/CustomInput';

import { ReactComponent as ColoredFacebookIcon } from '../../assets/icons/ColoredFacebookIcon.svg';
import { ReactComponent as ColoredGoogleIcon } from '../../assets/icons/ColoredGoogleIcon.svg';

const cx = classNames.bind(style);

function Signup() {
  const backgroundBanner =
    'https://down-vn.img.susercontent.com/file/sg-11134004-23030-vhzme1v5qvov4a';

  const schema = useMemo(
    () =>
      Joi.object({
        phone_number: Joi.string()
          .regex(/(^(\(?\+?84\)?|0)\s*[35789])\s*(([0-9]\s*){8})\b/)
          .messages({
            'string.empty': 'Invalid Phone',
            'string.pattern.base': 'Invalid Phone'
          })
      }),
    []
  );

  const { control, formState, handleSubmit } = useForm({
    mode: 'onChange',
    resolver: joiResolver(schema)
  });

  const handleSignup = (values) => {
    console.log(formState.errors);
  };
  return (
    <>
      <BlankHeader title='sign up' />
      <div className={cx('signup-wrapper')}>
        <div
          className={cx('signup-inner-wrapper')}
          style={{ backgroundImage: `url(${backgroundBanner})` }}
        >
          <div className='d-flex justify-content-end'>
            <form
              className={cx('signup-form')}
              autoComplete='off'
              onSubmit={handleSubmit(handleSignup)}
            >
              <div className={cx('form-title')}>Sign up</div>
              <div className={cx('form-content')}>
                <CustomInput
                  refName='phone_number'
                  control={control}
                  placeholder='Phone Number'
                  showTick
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
                  >
                    <ColoredFacebookIcon />
                    <span>Facebook</span>
                  </button>
                  <button
                    type='button'
                    className='btn btn-blank'
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
                {'Have an Account ? '}{' '}
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
    </>
  );
}

export default Signup;
