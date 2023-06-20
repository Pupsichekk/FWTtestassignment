// Helper for checking filters object in store, if values are empty = object is empty.
export const isEmpty = (obj) => {
  const filteredValues = Object.values(obj).filter((value) => {
    if (value === "") return false;
    return true;
  });
  if (filteredValues.length > 0) return false;
  return true;
};
