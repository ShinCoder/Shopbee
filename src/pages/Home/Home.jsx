import { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomInput from '../../components/CustomInput/CustomInput';

function Home() {
  const user = useSelector((state) => state.user);

  console.log(user);

  return <div style={{ width: '500px', marginLeft: '20px' }}>Hi</div>;
}

export default Home;
