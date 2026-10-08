// Функция получения рандомного целого от min до max
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

// Функция для выбора случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const DESCRIPTIONS = [
  'Моя первая фотография',
  'Закат на море',
  'Горы в тумане',
  'Прогулка по осеннему парку',
  'Кофе и книга',
  'Вид из окна',
  'Старая улочка',
  'Летний пикник',
  'Зимний лес',
  'Городские огни',
  'Мой кот',
  'Велосипедная прогулка',
  'Цветущая сакура',
  'Дождливый день',
  'Путешествие в горы',
  'Утро в деревне',
  'Архитектура старого города',
  'Фото с друзьями',
  'Морской берег',
  'Цветочное поле',
  'Звёздное небо',
  'Уютное кафе',
  'Зимние каникулы',
  'Семейный праздник',
  'Незабываемый момент'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Олег', 'Юлий', 'Борис', 'Елена', 'Дмитрий',
  'Аня', 'Серёжа', 'Катя', 'Паша', 'Таня',
  'Алексей', 'Юлия', 'Максим', 'Натали', 'Вектор'
];

const createIdGenerator = () => {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
};

const getNextCommentId = createIdGenerator();

// Функция для создания 1 комментария
const createComment = () => {
  const messageCount = getRandomInteger(1, 2);

  const messagesCopy = MESSAGES.slice();
  const selectedMessages = [];

  for (let i = 0; i < messageCount; i++) {
    const randomIndex = getRandomInteger(0, messagesCopy.length - 1);
    selectedMessages.push(messagesCopy[randomIndex]);
    messagesCopy.splice(randomIndex, 1);
  }

  const message = selectedMessages.join(' ');

  return {
    id: getNextCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: message,
    name: getRandomArrayElement(NAMES)
  };
};

// Функция для создания списка комментариев
const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return comments;
};

const getNextPhotoId = createIdGenerator();

// Функция для создания 1 фотографии
const createPhoto = () => {
  const photoId = getNextPhotoId();

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: createComments()
  };
};

const photos = [];
for (let i = 0; i < 25; i++) {
  photos.push(createPhoto());
}

