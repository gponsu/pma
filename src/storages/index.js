import nullStorage from "./null";
import firestore from "./firestore";

export default storage => {
  if (storage === "firestore") return firestore;
  return nullStorage;
};
