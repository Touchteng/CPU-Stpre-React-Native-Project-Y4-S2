import { Storage } from './index';

class ItemLocalStore extends Storage {
  key = '@item';
  setValue(value) {
    return this.setItem(this.key, value);
  }

  getValue() {
    return this.getItem(this.key);
  }
}

const itemLocalStore = new ItemLocalStore();
export default itemLocalStore;
