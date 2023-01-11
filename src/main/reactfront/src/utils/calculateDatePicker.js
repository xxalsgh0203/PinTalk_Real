export function calculateYear(number) {
  const limit = 100;
  const maxYear = new Date().getFullYear();
  const minYear = maxYear - limit;
  let rangeYear = [];
  for (let i = minYear; i <= maxYear; i++) {
    number === 'number' ? rangeYear.push(i) : rangeYear.push(i + '년');
  }
  return rangeYear;
}

export function calculateMonthWithDay(length, name) {
  const array = Array.from({ length }, (_, i) => i + 1 + name);
  const newArray = array.map((item) => {
    const stringNumber = item + '';
    return stringNumber.length === 2 ? '0' + stringNumber : stringNumber;
  });
  return newArray;
}
