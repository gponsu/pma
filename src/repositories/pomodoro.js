import config from "../../config/environment";
import loadStorage from "../storages";

const storage = loadStorage(config.storage);

export default {
  save: pomodoro => {
    return storage.setPomodoro(pomodoro);
  }
};
