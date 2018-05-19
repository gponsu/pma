import config from '../../config/environment';
import * as firebase from 'firebase/app';

export default firebase.initializeApp(config.firebase);
