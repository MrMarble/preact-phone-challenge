import { CACHE_TIME } from "../constants";

const isExpired = (timestamp) => Date.now() > timestamp;

export const loadCache = (key) => {
  const data = window.localStorage.getItem(key);
  if (data !== null) {
    const wrapper = JSON.parse(data);
    if (isExpired(wrapper.expiration)) {
      window.localStorage.removeItem(key);
      return false;
    }
    return wrapper.data;
  }
  return false;
};

export const setCache = (key, data, expiration = CACHE_TIME) => {
  const wrapper = { expiration: Date.now() + expiration, data };

  window.localStorage.setItem(key, JSON.stringify(wrapper));
};
