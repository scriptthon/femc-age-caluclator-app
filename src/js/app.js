export const checkValue = (array) => {
  const checkFalse = []
  array.forEach((block) => {
    const input = block.querySelector("input"),
      label = block.querySelector("label");
    if (!input.value) {
      input.classList.add("err");
      label.classList.add("err");
      checkFalse.push(false)
    }
    input.addEventListener("input", () => {
      input.classList.remove("err");
      label.classList.remove("err");
    });
  });
  if (checkFalse.includes(false)) {
    return false
  } else {
    return true
  }
};

export const isValidDate = (month, day, year) => {
  // Oy va kunlarni to'g'ri tuzilishi
  const isValidMonth = month >= 1 && month <= 12;
  // Tug'ilgan yil cheklanishi (masalan, 2007 bo'lgan yilning 4 yorug'lik yil bo'lishi mumkin)
  const isValidYear = year >= 0;
  // Oy va kunlar bir xil tug'riligi
  const isValidMonthDay =
    (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && day <= 31 ||
    (month === 4 || month === 6 || month === 9 || month === 11) && day <= 30 ||
    month === 2 && ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? day <= 29 : day <= 28;
  return isValidMonth && isValidYear && isValidMonthDay;
}