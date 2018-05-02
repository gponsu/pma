import config from '../../config/environment';
import { database } from '../services/firebase';

export default {
  getAll: async () => {
    const tasks = await database.ref('/tasks').once('value');
    return Object.values(tasks.val());
  },

  set: async (item) => {
    return await database.ref('/tasks').push(item);
  }
};
