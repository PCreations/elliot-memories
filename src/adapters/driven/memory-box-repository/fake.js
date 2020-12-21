const { Memory } = require("../../../model/memory");
const { MemoryBox } = require("../../../model/memory-box");

const FakeMemoryBoxRepository = ({ boxes = {} } = {}) => {
  const boxesData = { ...boxes };

  return {
    async getByName({ name }) {
      return MemoryBox({
        name,
        memories: boxesData[name].map(({ text, date }) =>
          Memory({ text, date })
        ),
      });
    },
    async save({ box }) {
      boxesData[box.name] = box.memories.map((memory) => ({
        text: memory.text,
        date: memory.date,
      }));
    },
  };
};

module.exports = {
  FakeMemoryBoxRepository,
};
