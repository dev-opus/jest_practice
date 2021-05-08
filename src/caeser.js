const encrypt = (message, key) => {
  if (key > 26 || key < -26) {
    return console.log(
      'range of key exceeded. key must be in the range of -26 to 26'
    );
  }

  const charArr = message.trim().split('');
  const charCodes = charArr.map(char => char.charCodeAt());

  const shiftedCharCodes = charCodes.map(code => {
    if (code === 32) return code;
    if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122))
      return code;

    if (code >= 65 && code <= 90) {
      if (code + key > 90) return code + key - 26;
      if (code + key < 65) return code + key + 26;

      return ((code + key - 65) % 26) + 65;
    }

    if (code >= 97 && code <= 122) {
      if (code + key > 122) return code + key - 26;
      if (code + key < 97) return code + key + 26;
    }

    return code + key;
  });

  const cypherArr = shiftedCharCodes.map(charCode =>
    String.fromCharCode(charCode)
  );

  return cypherArr.join('');
};

module.exports = caeser = (str, key) => {
  return encrypt(str, key);
};
