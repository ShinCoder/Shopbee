export default function toVietnamDongFormat(number) {
  if (typeof number !== 'number') return number;

  const formated = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(number);

  return formated.slice(0, -2);
}
