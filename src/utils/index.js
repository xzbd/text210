export const convertTextTo10 = (text, utf8 = true) => {
  const binaryArray = [...text].map(c => convertCharTo10(c.charCodeAt(0)));
    return binaryArray.join(' ');
};

const convertCharTo10 = (_charCode, utf8 = true) => {
  if (!_charCode) return;
  const charCode = parseInt(_charCode, 10);
  const remainders = [];
  let current = charCode;
  while (true) {
    let division = Math.floor(current / 2);
    remainders.unshift(current - 2 * (division));
    if (division === 0) break;
    current = division;
  }
  if (utf8) {
    for (; remainders.length < 8; remainders.unshift('0')) ;
  }
  return remainders.join('');
};

