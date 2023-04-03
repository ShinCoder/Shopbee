export default function toVietnamPhoneNumberFormat(phoneNumber) {
  let result = phoneNumber;
  if (phoneNumber.match(/(^(\(?\+?84\)?|0)\s*[35789])\s*(([0-9]\s*){8})\b/)) {
    let temp = phoneNumber.replace(/\s/gm, '');
    if (temp.startsWith('0')) {
      temp = temp.replace('0', '(+84)');
    } else if (temp.startsWith('84')) {
      temp = temp.replace('84', '(+84)');
    } else if (temp.startsWith('(84)')) {
      temp = temp.replace('(84)', '(+84)');
    } else if (temp.startsWith('(84')) {
      temp = temp.replace('(84', '(+84)');
    } else if (temp.startsWith('84)')) {
      temp = temp.replace('84)', '(+84)');
    } else if (!temp.startsWith('(+84)')) {
      if (temp.startsWith('(+84')) {
        temp = temp.replace('(+84', '(+84)');
      } else if (temp.startsWith('+84)')) {
        temp = temp.replace('+84)', '(+84)');
      } else if (temp.startsWith('+84')) {
        temp = temp.replace('+84', '(+84)');
      }
    }

    if (temp.lenght == 14) result = temp;
    else {
      temp = temp.split('');
      temp.splice(5, 0, ' ');
      temp.splice(8, 0, ' ');
      temp.splice(12, 0, ' ');
      temp.splice(15, 0, ' ');
      result = temp.join('');
    }
  }
  return result;
}
