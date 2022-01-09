export default {
    /**
     * set storage engine
     */
    storage: {},
  
    /**
     * set data into storage engine
     *
     * @param {string} key
     * @param {value} value
     */
    set(key, value) {
      this.storage[key] = JSON.stringify({ data: value });
    },
  
    /**
     * get value from storage engine
     *
     * @param {string} key
     * @returns {any}
     */
    get(key) {
      let value = this.storage[key];
      return value ? JSON.parse(value).data : null;
    },
  
    /**
     * remove key from storage
     *
     * @param {string} key
     */
    async remove(key) {
      delete this.storage[key];
    },
  };