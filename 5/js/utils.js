// Функция получения рандомного целого от min до max
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

// Функция для выбора случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
};

export {getRandomArrayElement, createIdGenerator};
