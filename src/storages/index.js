import nullStorage from './null';
import firebaseStorage from './firebase';

export default (storage) => {
  if(storage === 'firebase') return firebaseStorage;
  return nullStorage;
};
