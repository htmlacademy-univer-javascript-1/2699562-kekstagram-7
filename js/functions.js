function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// линтер не даёт испльзовать console.log(), так что я оставил просто вызов функций, которые были в задании

// Cтрока короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false


function isPalindrome(str) {
  const okStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = okStr.length - 1; i >= 0; i--) {
    reversedStr += okStr[i].toLowerCase();
  }

  return okStr === reversedStr;
}
// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс');  // false


function extractDigits(input) {
  const str = input.toString();

  let digitsStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    const parsedChar = parseInt(char, 10);

    if (!Number.isNaN(parsedChar)) {
      digitsStr += char;
    }
  }

  if (digitsStr === '') {
    return NaN;
  }

  return parseInt(digitsStr, 10);
}

extractDigits('2023 год');            // 2023
extractDigits('ECMAScript 2022');     // 2022
extractDigits('1 кефир, 0.5 батона'); // 105
extractDigits('агент 007');           // 7
extractDigits('а я томат');           // NaN
