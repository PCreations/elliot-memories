const {
  FakeMemoryBoxRepository,
} = require("../adapters/driven/memory-box-repository");
const { AddMemoryUseCase } = require("../use-cases/add-memory");
const { Memory } = require("../model/memory");

describe("adding a new memory in the box", () => {
  it("adds a new memory in the box", async () => {
    const fakeMemoryBoxRepository = FakeMemoryBoxRepository({
      boxes: {
        elliot: [
          {
            text: "Elliot est arrivé à la maison !",
            date: new Date("2020-11-23T20:00:00"),
          },
        ],
      },
    });
    const addMemory = AddMemoryUseCase({
      memoryBoxRepository: fakeMemoryBoxRepository,
    });
    const today = new Date();

    await addMemory({
      boxName: "elliot",
      today,
      text: "Elliot a (encore) pissé sur le lit",
    });

    const elliotMemoryBox = await fakeMemoryBoxRepository.getByName({
      name: "elliot",
    });
    expect(elliotMemoryBox.memories).toContainEqual(
      Memory({
        text: "Elliot a (encore) pissé sur le lit",
        date: today,
      })
    );
  });
});
