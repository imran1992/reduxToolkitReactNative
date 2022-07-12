import type {Storage as StorageType} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';
const storage = new MMKV();

const reduxStorage: StorageType = {
  setItem: (key: string, value: any) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const config: {
  key: string;
  storage: StorageType;
  blacklist: Array<string>;
  version: number;
} = {
  key: 'root',
  storage: reduxStorage,
  version: 1,
  blacklist: ['api'],
};
export default config;
