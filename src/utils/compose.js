const compose = (...functions) => {
  if (functions.length === 0) {
    return args => args;
  }

  if (functions.length === 1) {
    return functions[0];
  }

  return functions.reduce((acc, curr) => (...args) => acc(curr(...args)))
};

export default compose;
