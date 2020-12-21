const FakeRandomNumberGenerator = ({ numberToReturnForUpperLimit }) => ({
  generate({ upperLimit = 100 } = {}) {
    return numberToReturnForUpperLimit[upperLimit];
  },
});

module.exports = {
  FakeRandomNumberGenerator,
};
