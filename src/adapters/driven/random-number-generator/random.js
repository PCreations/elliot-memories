const RandomNumberGenerator = () => ({
  generate({ upperLimit = 100 } = {}) {
    return Math.floor(Math.random() * upperLimit);
  },
});

module.exports = {
  RandomNumberGenerator,
};
