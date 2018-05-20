import config from "../../config/environment";
import loadStorage from "../storages";

const storage = loadStorage(config.storage);

export default {
  findAll: async () => {
    return await storage.getAll();
  },

  save: task => {
    return storage.set(task);
  },

  remove: task => {
    return storage.remove(task);
  }
};
