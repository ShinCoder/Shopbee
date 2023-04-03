import { initializeApp } from 'firebase/app';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth
} from 'firebase/auth';
import config from '../../config';

const app = initializeApp(config.firebase);

export const auth = getAuth(app);
const facebookAuthProvider = new FacebookAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();
// googleAuthProvider.addScope(
//   'https://www.googleapis.com/auth/contacts.readonly'
// );
export { facebookAuthProvider, googleAuthProvider };
export default app;
