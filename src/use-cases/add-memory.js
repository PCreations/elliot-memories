const AddMemoryUseCase = ({ memoryBoxRepository }) => async ({
  boxName,
  today,
  text,
}) => {
  const box = await memoryBoxRepository.getByName({ name: boxName });
  box.addMemory({ today, text });
  return memoryBoxRepository.save({ box });
};

module.exports = {
  AddMemoryUseCase,
};
