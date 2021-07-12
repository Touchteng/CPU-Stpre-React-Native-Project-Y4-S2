import { Storage } from './index';

class ListItemStore extends Storage {
  key = '@items';
  // setValue(value) {
  //   return this.setItem(this.key, value);
  // }

  // getValue() {
  //   return this.getItem(this.key);
  // }

  async add(item) {
    const items = await this.getAll();
    console.log('set items====>', items);
    items.push(item);
    this.setItem(this.key, JSON.stringify(items));
  }

  async getAll() {
    const items = await this.getItem(this.key);
    console.log('get items====>', items);
    return items ? JSON.parse(items) : [];
  }

  // TODO:
  remove(item) {}
  update(item) {}
}

const itemLocalStore = new ListItemStore();
export default itemLocalStore;
