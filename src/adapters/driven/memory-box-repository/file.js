const { promises: fs } = require("fs");
const path = require("path");
const { Memory } = require("../../../model/memory");
const { MemoryBox } = require("../../../model/memory-box");

const FILE_PATH = path.resolve(__dirname, "boxes.json");

const FileMemoryBoxRepository = () => {
  const getBoxes = () =>
    fs.readFile(FILE_PATH).then((data) => JSON.parse(data));

  return {
    async getByName({ name }) {
      const { boxes } = await getBoxes();
      return MemoryBox({
        name,
        memories: boxes[name].map(({ text, date }) =>
          Memory({ text, date: new Date(date) })
        ),
      });
    },
    async save({ box }) {
      const { boxes } = await getBoxes();
      boxes[box.name] = box.memories.map((memory) => ({
        text: memory.text,
        date: memory.date,
      }));
      return fs.writeFile(FILE_PATH, JSON.stringify({ boxes }), {
        encoding: "utf8",
      });
    },
  };
};

module.exports = {
  FileMemoryBoxRepository,
};
