import 'firebase/firestore';
import firebase from './firebase';

const firestore = firebase.firestore();

firestore.settings({
  timestampsInSnapshots: true
});

export default firestore;
