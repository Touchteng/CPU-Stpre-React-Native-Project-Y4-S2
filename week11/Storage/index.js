import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  setItem(key, value) {
    console.log('Saving to local storage with key: ', key);
    return AsyncStorage.setItem(key, value);
  }

  getItem(key) {
    return AsyncStorage.getItem(key);
  }

  // TODO:
  getAllKeys() {}
}

const storage = new Storage();

export default storage;
