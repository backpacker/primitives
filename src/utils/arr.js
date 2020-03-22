const filterFalsy = (arr = []) => {
  return arr.filter(Boolean);
};

const middle = (arr = []) => arr[arr.length / 2 - 1];

export { filterFalsy, middle };
