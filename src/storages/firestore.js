import firebase from '../services/firebase';
import db from '../services/firestore';

const collection = db.collection('tasks');

export default {
  getAll: async () => {
    const snapshot = await collection.get();

    return snapshot.docs.map(doc => (
      { id: doc.id, ...doc.data() }
    ));
  },

  set: (item) => {
    collection
      .doc(item.id)
      .set({ title: item.title });
  },

  remove: async (item) => {
    collection
      .doc(item.id)
      .delete();
  }
};
