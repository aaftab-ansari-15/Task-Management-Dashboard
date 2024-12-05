// Get data from sessionStorage
export const getSessionStorageData = (key) => {
    try {
      const data = sessionStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error parsing sessionStorage key "${key}":`, error);
      return null;
    }
  };
  
  // Set data in sessionStorage
  export const setSessionStorageData = (key, value) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}":`, error);
    }
  };
  
  // Remove data from sessionStorage
  export const removeSessionStorageData = (key) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing sessionStorage key "${key}":`, error);
    }
  };