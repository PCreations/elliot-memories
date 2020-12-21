const {
  FileMemoryBoxRepository,
} = require("./adapters/driven/memory-box-repository");
const {
  RandomNumberGenerator,
} = require("./adapters/driven/random-number-generator");
const { createCLI } = require("./adapters/driving/cli");
const { AddMemoryUseCase, GetMemoryUseCase } = require("./use-cases");

const memoryBoxRepository = FileMemoryBoxRepository();
const randomNumberGenerator = RandomNumberGenerator();
const addMemory = AddMemoryUseCase({ memoryBoxRepository });
const getMemory = GetMemoryUseCase({
  memoryBoxRepository,
  randomNumberGenerator,
});
const handleCLI = createCLI({ addMemory, getMemory });

handleCLI();
