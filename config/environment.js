const settings = () => {
  let ENV = {
    storage: 'firebase',
    firebase:  {
      apiKey: 'AIzaSyDwiHFv5ivq01dFfHTti2-7Q1TR2fFv1cQ',
      authDomain: 'pma-project.firebaseapp.com',
      databaseURL: 'https://pma-project.firebaseio.com',
      storageBucket: 'pma-project.appspot.com'
    }
  };

  if (process.env.NODE_ENV === 'development') {
    ENV.storage = 'none';
  }

  return ENV;
} 

module.exports = settings();
