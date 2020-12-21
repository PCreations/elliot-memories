const Memory = (props) => {
  const { text, date } = props;

  return {
    get text() {
      return text;
    },
    get date() {
      return date;
    },
  };
};

module.exports = {
  Memory,
};
