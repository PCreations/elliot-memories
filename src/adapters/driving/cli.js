const createCLI = ({ addMemory, getMemory }) => async () => {
  const [, , memoryTextToAdd] = process.argv;

  if (memoryTextToAdd) {
    await addMemory({
      boxName: "elliot",
      text: memoryTextToAdd,
      today: new Date(),
    });
    console.log("Souvenir ajouté dans la boite à souvenirs Elliot");
    process.exit(0);
  }

  const memory = await getMemory({ boxName: "elliot" });
  console.log(
    `[${memory.date.toLocaleTimeString("fr-FR")}] : "${memory.text}"`
  );
  process.exit(0);
};

module.exports = {
  createCLI,
};
