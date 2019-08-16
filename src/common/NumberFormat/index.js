export default function(number, decimals, decPoint, thousandsPoint) {
  if (number == null || !isFinite(number)) {
    throw new TypeError('number is not valid');
  }

  if (!decimals) {
    const len = number.toString().split('.').length;
    decimals = len > 1 ? len : 0;
  }

  if (!decPoint) {
    decPoint = '.';
  }

  if (!thousandsPoint) {
    thousandsPoint = ',';
  }

  number = parseFloat(number).toFixed(decimals);

  number = number.replace('.', decPoint);

  const splitNum = number.split(decPoint);
  splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsPoint);
  number = splitNum.join(decPoint);

  return number;
}
