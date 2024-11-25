const localStorageUtils = {
    getData: (key) => JSON.parse(localStorage.getItem(key)),
    setData: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
  };
  
  export default localStorageUtils;
  