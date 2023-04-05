import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomInput from '../../components/CustomInput/CustomInput';
import {
  ErrorToastContainer,
  toastErrorMessage
} from '../../utils/toastify/error';
import CustomeButton from '../../components/CustomButton/CustomButton';

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div style={{ display: 'flex' }}>
      <CustomeButton
        type='anchor'
        href='/test'
      >
        Hello
      </CustomeButton>
    </div>
  );
}

export default Home;
