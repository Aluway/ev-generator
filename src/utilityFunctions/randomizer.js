const shuffle = function (array) {
  let newArray = [...array];
  for (let i = 0; i < 10000; i++) {
    let item1 = Math.floor(Math.random() * array.length);
    let item2 = Math.floor(Math.random() * array.length);

    const temp = newArray[item1];
    newArray[item1] = newArray[item2];
    newArray[item2] = temp;
  }
  return newArray;
};

export default shuffle;
