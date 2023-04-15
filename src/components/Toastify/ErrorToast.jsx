import { useSelector } from 'react-redux';
import { Slide, ToastContainer, toast } from 'react-toastify';

function ErrorToast() {
  const systemState = useSelector((state) => state.system);

  if (systemState.error) {
    toast.error(systemState.error, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });
  }

  return (
    <ToastContainer
      position='top-center'
      transition={Slide}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='colored'
    />
  );
}

export default ErrorToast;
