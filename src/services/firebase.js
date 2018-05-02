import config from '../../config/environment';
import * as firebase from 'firebase';

const services = firebase.initializeApp(config.firebase);

export const database = services.database();
