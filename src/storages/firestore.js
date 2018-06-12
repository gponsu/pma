import db from "../services/firestore";
const collection = db.collection("tasks");

export default {
  getAll: async () => {
    const snapshot = await collection.get();

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  set: item => {
    collection.doc(item.id).set({ title: item.title });
  },

  setPomodoro: item => {
    db
      .collection("pomodoros")
      .doc(item.id)
      .set({
        timestamp: item.timestamp,
        duration: item.duration,
        completed: item.completed
      });
  },

  remove: async item => {
    collection.doc(item.id).delete();
  }
};
