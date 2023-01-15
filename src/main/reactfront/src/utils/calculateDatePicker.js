export function calculateYear(number) {
  const limit = 100;
  const maxYear = new Date().getFullYear();
  const minYear = maxYear - limit;
  let rangeYear = [];
  for (let i = maxYear; i >= minYear; i--) {
    rangeYear.push(i);
  }
  return rangeYear;
}

export function calculateMonthWithDay(length) {
  const array = Array.from({ length }, (_, i) => i + 1);
  const newArray = array.map((item) => {
    const stringNumber = item + '';
    return stringNumber.length === 1 ? '0' + stringNumber : stringNumber;
  });
  return newArray;
}
