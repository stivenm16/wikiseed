export const persistLocalStorageUser = <T,>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify({ ...value }));
  } catch (error) {
    console.log(error);
  }
};

export const clearLocalStorageUser = (key: string) => {
  localStorage.removeItem(key);
};
