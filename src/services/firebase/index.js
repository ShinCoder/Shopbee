import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth } from 'firebase/auth';
import config from '../../config';

const app = initializeApp(config.firebase);

export const auth = getAuth(app);
export const facebookAuthProvider = new FacebookAuthProvider();
export default app;
