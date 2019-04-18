const onlyEveryThird = (string_to_cut) => {
  let newString = '';

  for (let i = 0; i < string_to_cut.length; i++) {
    let position = i + 1;
    if (position % 3 === 0) {
      newString += string_to_cut[i];
    }
  }

  return newString;
};

module.exports = onlyEveryThird;
