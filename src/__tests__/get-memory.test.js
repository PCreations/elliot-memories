const {
  FakeMemoryBoxRepository,
} = require("../adapters/driven/memory-box-repository");
const {
  FakeRandomNumberGenerator,
} = require("../adapters/driven/random-number-generator/fake");
const { Memory } = require("../model/memory");
const { GetMemoryUseCase } = require("../use-cases/get-memory");

describe("getting a memory randomly", () => {
  it("gets a memory", async () => {
    const memoryBoxRepository = FakeMemoryBoxRepository({
      boxes: {
        elliot: [
          {
            text: "Un souvenir à propos d'Elliot",
            date: new Date("2020-12-01"),
          },
          {
            text: "Elliot a (encore) pissé sur mon lit !",
            date: new Date("2020-11-29T15:00:00"),
          },
        ],
      },
    });
    const randomNumberGenerator = FakeRandomNumberGenerator({
      numberToReturnForUpperLimit: {
        2: 1,
      },
    });
    const getMemory = GetMemoryUseCase({
      memoryBoxRepository,
      randomNumberGenerator,
    });

    const theRetrievedMemory = await getMemory({ boxName: "elliot" });

    expect(theRetrievedMemory).toEqual(
      Memory({
        text: "Elliot a (encore) pissé sur mon lit !",
        date: new Date("2020-11-29T15:00:00"),
      })
    );
  });
});
