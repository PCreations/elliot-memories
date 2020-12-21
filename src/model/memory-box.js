const { Memory } = require("./memory");

const MemoryBox = (props) => {
  const { name, memories = [] } = props;

  return {
    addMemory({ text, today }) {
      memories.push(
        Memory({
          text,
          date: today,
        })
      );
    },
    getMemoryAt({ index }) {
      return memories[index];
    },
    get name() {
      return name;
    },
    get memories() {
      return memories;
    },
    get size() {
      return memories.length;
    },
  };
};

module.exports = {
  MemoryBox,
};
