const GetMemoryUseCase = ({
  memoryBoxRepository,
  randomNumberGenerator,
}) => async ({ boxName }) => {
  const box = await memoryBoxRepository.getByName({ name: boxName });
  return box.getMemoryAt({
    index: randomNumberGenerator.generate({ upperLimit: box.size }),
  });
};

module.exports = {
  GetMemoryUseCase,
};
